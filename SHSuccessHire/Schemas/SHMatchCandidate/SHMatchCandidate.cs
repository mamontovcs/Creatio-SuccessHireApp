namespace Terrasoft.Core.Process.Configuration {

	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	/// <exclude/>
	public partial class SHMatchCandidate {

		#region Private Fields

		private const string AvailableCandidateStatusIdentifier = "BFEB65A3-A126-4071-8708-89A1E794DCF0";
		private const string CandidateIdentifier = "4849E68C-FAA1-4C2C-8CB7-85E08BA25DCF";
		private const string NotAvailableCandidateStatusId = "52DBF51F-FA9C-47D8-9572-CFCA129AD024";

		#endregion Private Fields

		#region Private Methods

		private decimal CalculateMatch(Guid candidateId, Guid vacancyId) {
			var skillsWeight = 60;
			var cityWeight = 20;
			var minimumAgeWeight = 10;
			var maximumAgeWeight = 20;
			var esqCandidate = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SHCandidate");
			esqCandidate.AddColumn("Age");
			esqCandidate.AddColumn("City.Name");
			esqCandidate.AddColumn("Id");
			var candidateEntity = esqCandidate.GetEntity(UserConnection, candidateId);
			var esqVacancy = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SHVacancy");
			esqVacancy.AddColumn("SHRequiredAge");
			esqVacancy.AddColumn("SHCity.Name");
			var vacancyEntity = esqVacancy.GetEntity(UserConnection, vacancyId);
			var candidateSkills = GetCandidateSkills(candidateId);
			var vacancySkills = GetVacancySkills(vacancyId);
			var matched = candidateSkills.Intersect(vacancySkills).Count();
			var skillsScore = vacancySkills.Count > 0
				? (decimal)matched / vacancySkills.Count * skillsWeight
				: 0;
			var vacancyAge = vacancyEntity.GetTypedColumnValue<int>("SHRequiredAge");
			var ageDiff = Math.Abs(candidateEntity.GetTypedColumnValue<int>("Age") - vacancyAge);
			var ageScore = vacancyAge == 0 ? maximumAgeWeight : ageDiff <= 5 ? maximumAgeWeight : (ageDiff <= 10 ? minimumAgeWeight : 0);
			var cityScore = candidateEntity.GetTypedColumnValue<string>("City_Name")
								== vacancyEntity.GetTypedColumnValue<string>("City_Name") ? cityWeight : 0;
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
			var candidateId = candidateEntity.GetTypedColumnValue<Guid>("Id");
			var matchScore = CalculateMatch(candidateId, Vacancy);
			var vacancyCandidateSchema = UserConnection.EntitySchemaManager.GetInstanceByName("SHVacancyCandidate");
			var vacancyCandidateEntity = vacancyCandidateSchema.CreateEntity(UserConnection);
			var entityConditions = new Dictionary<string, object>() {
					{ "SHVacancyId", Vacancy },
					{ "SHCandidateId", candidateId}
				};
			if (!vacancyCandidateEntity.FetchFromDB(entityConditions)) {
				vacancyCandidateEntity.SetDefColumnValues();
				vacancyCandidateEntity.SetColumnValue("SHVacancyId", Vacancy);
				vacancyCandidateEntity.SetColumnValue("SHCandidateId", candidateId);
				vacancyCandidateEntity.SetColumnValue("Status", NotAvailableCandidateStatusId);
				vacancyCandidateEntity.SetColumnValue("SHMatchScore", matchScore);
				vacancyCandidateEntity.Save();
			}
			vacancyCandidateEntity.SetColumnValue("Status", NotAvailableCandidateStatusId);
			vacancyCandidateEntity.SetColumnValue("SHMatchScore", matchScore);
			vacancyCandidateEntity.Save();
		}

		#endregion Private Methods

		#region Protected Methods

		protected override bool InternalExecute(ProcessExecutingContext context) {
			var candidateSchema = UserConnection.EntitySchemaManager.GetInstanceByName("SHCandidate");
			var candidateEntity = candidateSchema.CreateEntity(UserConnection);
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