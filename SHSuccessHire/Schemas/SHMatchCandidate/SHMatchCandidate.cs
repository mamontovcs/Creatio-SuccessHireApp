namespace Terrasoft.Core.Process.Configuration {

	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	/// <exclude/>
	public partial class SHMatchCandidate {

		#region Private Fields

		private const string NotAvailableCandidateStatusId = "52DBF51F-FA9C-47D8-9572-CFCA129AD024";

		#endregion Private Fields

		#region Private Methods

		private decimal CalculateMatch(Entity candidate, Guid vacancyId) {
			var skillsWeight = 60;
			var cityWeight = 20;
			var minimumAgeWeight = 10;
			var maximumAgeWeight = 20;
			// Candidate with linked Contact
			var esqCandidate = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SHCandidate");
			esqCandidate.AddColumn("SHContact.Age");
			esqCandidate.AddColumn("SHContact.City.Name");
			esqCandidate.AddColumn("Id");
			var candidateEntity = esqCandidate.GetEntity(UserConnection, candidate.PrimaryColumnValue);
			// Vacancy
			var esqVacancy = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SHVacancy");
			esqVacancy.AddColumn("SHRequiredAge");
			esqVacancy.AddColumn("SHCity.Name");
			var vacancyEntity = esqVacancy.GetEntity(UserConnection, vacancyId);
			// Skills
			var candidateSkills = GetCandidateSkills(candidate.PrimaryColumnValue);
			var vacancySkills = GetVacancySkills(vacancyId);
			// Skip if no skills
			if (vacancySkills.Count == 0 || candidateSkills.Count == 0) {
				return 0;
			}
			// Skills match
			var matched = candidateSkills.Intersect(vacancySkills).Count();
			decimal ratio = (decimal)matched / vacancySkills.Count;
			if (ratio < 0.5m) {
				return 0;
			}
			var skillsScore = ratio * skillsWeight;
			// Age
			var candidateAge = candidateEntity.GetTypedColumnValue<int>("SHContact_Age");
			var vacancyAge = vacancyEntity.GetTypedColumnValue<int>("SHRequiredAge");
			var ageDiff = Math.Abs(candidateAge - vacancyAge);
			var ageScore = vacancyAge == 0
				? maximumAgeWeight
				: ageDiff <= 5 ? maximumAgeWeight
				: (ageDiff <= 10 ? minimumAgeWeight : 0);
			// City
			var candidateCity = candidateEntity.GetTypedColumnValue<string>("SHContact_City_Name");
			var vacancyCity = vacancyEntity.GetTypedColumnValue<string>("SHCity_Name");
			var cityScore = candidateCity == vacancyCity ? cityWeight : 0;
			return skillsScore + ageScore + cityScore;
		}

		private List<string> GetCandidateSkills(Guid candidateId) {
			var esqCandidateSkills = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SHCandidateSkill");
			esqCandidateSkills.AddColumn("SHSkill.Name");
			esqCandidateSkills.Filters.Add(
				esqCandidateSkills.CreateFilterWithParameters(
					FilterComparisonType.Equal, "SHCandidate", candidateId));
			var candidateSkillsEntities = esqCandidateSkills.GetEntityCollection(UserConnection);
			var candidateSkills = candidateSkillsEntities
				.Select(e => e.GetTypedColumnValue<string>("SHSkill_Name"))
				.ToList();
			return candidateSkills;
		}

		private List<string> GetVacancySkills(Guid vacancyId) {
			var esqVacancySkills = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SHVacancySkill");
			esqVacancySkills.AddColumn("SHSkill.Name");
			esqVacancySkills.Filters.Add(
				esqVacancySkills.CreateFilterWithParameters(
					FilterComparisonType.Equal, "SHVacancy", vacancyId));
			var vacancySkillsEntities = esqVacancySkills.GetEntityCollection(UserConnection);
			var vacancySkills = vacancySkillsEntities
				.Select(e => e.GetTypedColumnValue<string>("SHSkill_Name"))
				.ToList();
			return vacancySkills;
		}

		private void PopulateVacancyCandidate(Entity candidateEntity) {
			var matchScore = CalculateMatch(candidateEntity, Vacancy);
			if (matchScore == 0) {
				return;
			}
			var vacancyCandidateSchema = UserConnection.EntitySchemaManager.GetInstanceByName("SHVacancyCandidate");
			var vacancyCandidateEntity = vacancyCandidateSchema.CreateEntity(UserConnection);
			var entityConditions = new Dictionary<string, object>() {
					{ "SHVacancy", Vacancy },
					{ "SHCandidate", Candidate}
				};
			if (!vacancyCandidateEntity.FetchFromDB(entityConditions)) {
				vacancyCandidateEntity.SetDefColumnValues();
				vacancyCandidateEntity.SetColumnValue("SHVacancyId", Vacancy);
				vacancyCandidateEntity.SetColumnValue("SHCandidateId", Candidate);
				vacancyCandidateEntity.SetColumnValue("SHMatchScore", matchScore);
				vacancyCandidateEntity.Save();
				candidateEntity.SetColumnValue("SHCandidateStatusId", NotAvailableCandidateStatusId);
				candidateEntity.Save();
			}
			candidateEntity.SetColumnValue("SHCandidateStatusId", NotAvailableCandidateStatusId);
			candidateEntity.Save();
			vacancyCandidateEntity.SetColumnValue("SHMatchScore", matchScore);
			vacancyCandidateEntity.Save();
		}

		#endregion Private Methods

		#region Protected Methods

		protected override bool InternalExecute(ProcessExecutingContext context) {
			var candidateSchema = UserConnection.EntitySchemaManager.GetInstanceByName("SHCandidate");
			var candidateEntity = candidateSchema.CreateEntity(UserConnection);
			candidateEntity.FetchFromDB("Id", Candidate);
			PopulateVacancyCandidate(candidateEntity);
			return true;
		}

		#endregion Protected Methods

		#region Public Methods

		public override void CancelExecuting(params object[] parameters) {
			base.CancelExecuting(parameters);
		}

		public override bool CompleteExecuting(params object[] parameters) {
			return base.CompleteExecuting(parameters);
		}

		public override string GetExecutionData() {
			return string.Empty;
		}

		public override ProcessElementNotification GetNotificationData() {
			return base.GetNotificationData();
		}

		#endregion Public Methods
	}
}