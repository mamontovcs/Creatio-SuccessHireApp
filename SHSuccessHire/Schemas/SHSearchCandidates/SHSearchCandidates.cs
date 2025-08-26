namespace Terrasoft.Core.Process.Configuration {

	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	/// <exclude/>
	public partial class SHSearchCandidates {

		#region Private Fields

		private const string AvailableCandidateStatusIdentifier = "BFEB65A3-A126-4071-8708-89A1E794DCF0";
		private const string CandidateIdentifier = "4849E68C-FAA1-4C2C-8CB7-85E08BA25DCF";

		#endregion Private Fields

		#region Private Methods

		private EntityCollection GetAvailableCandidates() {
			var esqCandidate = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "Contact");
			esqCandidate.AddColumn("Id");
			esqCandidate.AddColumn("SHCandidateStatus.Id");
			esqCandidate.AddColumn("Type");
			esqCandidate.AddColumn("SHUpdatedOn");
			esqCandidate.Filters.Add(
				esqCandidate.CreateFilterWithParameters(
					FilterComparisonType.Equal, "Type", CandidateIdentifier));
			esqCandidate.Filters.Add(
				esqCandidate.CreateFilterWithParameters(
					FilterComparisonType.Equal, "SHCandidateStatus.Id", AvailableCandidateStatusIdentifier));
			var candidates = esqCandidate.GetEntityCollection(UserConnection);
			return candidates;
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

		#endregion Private Methods

		//private void CalculateMatchScore(EntityCollection candidates, List<string> vacancySkills) {
		//	foreach (var candidate in candidates) {
		//		var candidateId = candidate.GetTypedColumnValue<Guid>("Id");

		//		var esqCandidateSkills = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "CandidateSkill");
		//		esqCandidateSkills.AddColumn("Skill.Name");
		//		esqCandidateSkills.Filters.Add(
		//			esqCandidateSkills.CreateFilterWithParameters(FilterComparisonType.Equal, "Candidate", candidateId));
		//		var candidateSkillsEntities = esqCandidateSkills.GetEntityCollection(UserConnection);
		//		var candidateSkills = candidateSkillsEntities
		//			.Select(e => e.GetTypedColumnValue<string>("Skill_Name"))
		//			.ToList();

		//		int matched = candidateSkills.Intersect(vacancySkills).Count();
		//		decimal percent = (decimal)matched / totalRequired * 100;

		//		if (percent >= 50) {
		//			// Добавляем запись в VacancyCandidate
		//			var vacancyCandidate = new Entity(uc, "VacancyCandidate");
		//			vacancyCandidate.SetDefColumnValues();
		//			vacancyCandidate.SetColumnValue("VacancyId", vacancyId);
		//			vacancyCandidate.SetColumnValue("CandidateId", candidateId);
		//			vacancyCandidate.SetColumnValue("Status", "Підібраний");
		//			vacancyCandidate.SetColumnValue("MatchScore", percent); // сохраним процент
		//			vacancyCandidate.Save();
		//		}
		//	}
		//}

		#region Protected Methods

		protected override bool InternalExecute(ProcessExecutingContext context) {
			var availableCandidates = GetAvailableCandidates();
			if (availableCandidates.IsEmpty()) {
				return true;
			}
			var vacancySkills = GetVacancySkills(Vacancy);
			int totalRequired = vacancySkills.Count;
			if (totalRequired == 0) {
				return true;
			}
			return true;
		}

		#endregion Protected Methods

		#region Public Methods

		public decimal CalculateMatch(UserConnection userConnection, Guid candidateId, Guid vacancyId) {
			var esqCandidate = new EntitySchemaQuery(userConnection.EntitySchemaManager, "Candidate");
			esqCandidate.AddColumn("Age");
			esqCandidate.AddColumn("City.Name");
			esqCandidate.AddColumn("Id");
			var candidateEntity = esqCandidate.GetEntity(userConnection, candidateId);

			var esqVacancy = new EntitySchemaQuery(userConnection.EntitySchemaManager, "Vacancy");
			esqVacancy.AddColumn("RequiredAge");
			esqVacancy.AddColumn("City.Name");
			var vacancyEntity = esqVacancy.GetEntity(userConnection, vacancyId);

			var candidateSkills = GetCandidateSkills(candidateId);
			var vacancySkills = GetVacancySkills(vacancyId);

			int matched = candidateSkills.Intersect(vacancySkills).Count();
			decimal skillsScore = vacancySkills.Count > 0
				? (decimal)matched / vacancySkills.Count * 60
				: 0;

			int ageDiff = Math.Abs(candidateEntity.GetTypedColumnValue<int>("Age")
								- vacancyEntity.GetTypedColumnValue<int>("RequiredAge"));
			decimal ageScore = ageDiff <= 5 ? 20 : (ageDiff <= 10 ? 10 : 0);

			decimal cityScore = candidateEntity.GetTypedColumnValue<string>("City_Name")
								== vacancyEntity.GetTypedColumnValue<string>("City_Name") ? 20 : 0;

			return skillsScore + ageScore + cityScore;
		}

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