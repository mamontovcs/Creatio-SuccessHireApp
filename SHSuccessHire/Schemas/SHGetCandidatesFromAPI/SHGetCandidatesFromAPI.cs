namespace Terrasoft.Core.Process.Configuration {

	using global::Common.Logging;
	using Newtonsoft.Json;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Net;
	using Terrasoft.Common;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Requests;

	public class CandidateInfo {

		#region Public Properties

		[JsonProperty("age")]
		public string Age { get; set; }

		[JsonProperty("city")]
		public string City { get; set; }

		[JsonProperty("cv_title")]
		public string CVTitle { get; set; }

		[JsonProperty("email")]
		public string Email { get; set; }

		[JsonProperty("name")]
		public string Name { get; set; }

		[JsonProperty("phone")]
		public string Phone { get; set; }

		[JsonProperty("developer_skills")]
		public List<string> Skills { get; set; }

		#endregion Public Properties
	}

	public class CandidateInfos {

		#region Public Properties

		[JsonProperty("record")]
		public List<CandidateInfo> Candidates { get; set; }

		#endregion Public Properties
	}

	public partial class SHGetCandidatesFromAPI {

		#region Private Fields

		private const string ContactTypeCandidateId = "4849E68C-FAA1-4C2C-8CB7-85E08BA25DCF";
		private IHttpRequestClient _httpRequestClient;

		private ILog _logger;

		#endregion Private Fields

		#region Protected Properties

		protected IHttpRequestClient HttpRequestClient
		{
			get {
				if (_httpRequestClient == null) {
					_httpRequestClient = ClassFactory.Get<IHttpRequestClient>();
				}
				return _httpRequestClient;
			}
			set {
				_httpRequestClient = value;
			}
		}

		protected ILog Logger
		{
			get {
				return _logger ?? (_logger = LogManager.GetLogger("SuccessHireLogger"));
			}
		}

		#endregion Protected Properties

		#region Private Methods

		private Guid CreateCandidate(Guid contactId, string title) {
			var candidateSchema = UserConnection.EntitySchemaManager.GetInstanceByName("SHCandidate");
			var candidateEntity = candidateSchema.CreateEntity(UserConnection);
			candidateEntity.SetDefColumnValues();
			candidateEntity.SetColumnValue("SHContactId", contactId);
			candidateEntity.SetColumnValue("SHTitle", title);
			candidateEntity.Save();
			return candidateEntity.PrimaryColumnValue;
		}

		private Guid CreateOrUpdateContact(Guid contactId, CandidateInfo candidateInfo) {
			var contactSchema = UserConnection.EntitySchemaManager.GetInstanceByName("Contact");
			var contactEntity = contactSchema.CreateEntity(UserConnection);
			bool isNew = contactId == Guid.Empty || !contactEntity.FetchFromDB(contactId);
			if (isNew) {
				contactEntity.SetDefColumnValues();
				contactEntity.SetColumnValue("TypeId", ContactTypeCandidateId);
			}
			contactEntity.SetColumnValue("Name", candidateInfo.Name);
			if (!string.IsNullOrWhiteSpace(candidateInfo.Email)) {
				contactEntity.SetColumnValue("Email", candidateInfo.Email);
			}
			if (!string.IsNullOrWhiteSpace(candidateInfo.Phone)) {
				contactEntity.SetColumnValue("Phone", candidateInfo.Phone);
			}
			contactEntity.SetColumnValue("Age", candidateInfo.Age);
			contactEntity.SetColumnValue("CityId", GetOrCreateCityId(candidateInfo.City));
			contactEntity.Save();
			return contactEntity.PrimaryColumnValue;
		}

		private HttpRequestConfig CreateRequestConfig(HttpRequestMethod method, Uri url, string key) {
			return new HttpRequestConfig {
				Url = url,
				Method = method,
				Headers = {
					{ "X-Master-Key", key },
					{ "ContentType", "application/json" }
				}
			};
		}

		private (Guid CandidateId, Guid ContactId)? FindCandidate(CandidateInfo candidateInfo) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SHCandidate");
			esq.AddColumn("Id").Name = "CandidateId";
			esq.AddColumn("SHContact.Id").Name = "ContactId";

			var filterGroup = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.Or);
			if (!string.IsNullOrWhiteSpace(candidateInfo.Email)) {
				filterGroup.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "SHContact.Email", candidateInfo.Email));
			}
			if (!string.IsNullOrWhiteSpace(candidateInfo.Phone)) {
				filterGroup.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "SHContact.Phone", candidateInfo.Phone));
			}
			esq.Filters.Add(filterGroup);

			var entity = esq.GetEntityCollection(UserConnection).FirstOrDefault();
			if (entity == null) {
				return null;
			}

			return (
				entity.GetTypedColumnValue<Guid>("CandidateId"),
				entity.GetTypedColumnValue<Guid>("ContactId")
			);
		}

		private List<CandidateInfo> GetCandidateInfos() {
			var url = SysSettings.GetValue(UserConnection, "CandidatesInfosUrl", string.Empty);
			var key = SysSettings.GetValue(UserConnection, "CandidatesInfosUrlKey", string.Empty);
			var httpRequestConfig = CreateRequestConfig(HttpRequestMethod.GET, new Uri(url), key);
			var response = SendRequest(httpRequestConfig);
			return response;
		}

		private Guid GetOrCreateCityId(string cityName) {
			if (string.IsNullOrWhiteSpace(cityName)) {
				return Guid.Empty;
			}
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "City");
			var idCol = esq.AddColumn("Id");
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", cityName));
			var existingCity = esq.GetEntityCollection(UserConnection).FirstOrDefault();
			if (existingCity != null) {
				return existingCity.GetTypedColumnValue<Guid>(idCol.Name);
			}
			var citySchema = UserConnection.EntitySchemaManager.GetInstanceByName("City");
			var cityEntity = citySchema.CreateEntity(UserConnection);
			cityEntity.SetDefColumnValues();
			cityEntity.SetColumnValue("Name", cityName);
			cityEntity.Save();
			return cityEntity.PrimaryColumnValue;
		}

		private void PopulateCandidates(List<CandidateInfo> candidateInfos) {
			foreach (var candidateInfo in candidateInfos) {
				var found = FindCandidate(candidateInfo);
				var title = candidateInfo.CVTitle + " | " + candidateInfo.Name;
				if (found == null) {
					var contactId = CreateOrUpdateContact(Guid.Empty, candidateInfo);
					var candidateId = CreateCandidate(contactId, title);
					SaveCandidateSkills(candidateId, candidateInfo.Skills);
				} else {
					var (candidateId, contactId) = found.Value;
					var candidateSchema = UserConnection.EntitySchemaManager.GetInstanceByName("SHCandidate");
					var candidateEntity = candidateSchema.CreateEntity(UserConnection);
					if (candidateEntity.FetchFromDB(candidateId)) {
						candidateEntity.SetColumnValue("SHTitle", title);
						candidateEntity.Save();
					}
					CreateOrUpdateContact(contactId, candidateInfo);
					SaveCandidateSkills(candidateId, candidateInfo.Skills);
				}
			}
		}

		private void SaveCandidateSkills(Guid candidateId, List<string> skills) {
			if (skills == null || skills.Count == 0) {
				return;
			}
			var delete = new Delete(UserConnection)
				.From("SHCandidateSkill")
				.Where("SHCandidateId").IsEqual(Column.Parameter(candidateId));
			delete.Execute();
			var skillSchema = UserConnection.EntitySchemaManager.GetInstanceByName("SHSkill");
			var candidateSkillSchema = UserConnection.EntitySchemaManager.GetInstanceByName("SHCandidateSkill");
			foreach (var skillName in skills) {
				if (string.IsNullOrWhiteSpace(skillName)) {
					continue;
				}
				var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SHSkill");
				var idCol = esq.AddColumn("Id");
				esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", skillName));
				var existingSkillEntity = esq.GetEntityCollection(UserConnection).FirstOrDefault();
				Guid skillId;
				if (existingSkillEntity == null) {
					var skillEntity = skillSchema.CreateEntity(UserConnection);
					skillEntity.SetDefColumnValues();
					skillEntity.SetColumnValue("Name", skillName);
					skillEntity.Save();
					skillId = skillEntity.PrimaryColumnValue;
				} else {
					skillId = existingSkillEntity.GetTypedColumnValue<Guid>(idCol.Name);
				}
				var candidateSkillEntity = candidateSkillSchema.CreateEntity(UserConnection);
				candidateSkillEntity.SetDefColumnValues();
				candidateSkillEntity.SetColumnValue("SHCandidateId", candidateId);
				candidateSkillEntity.SetColumnValue("SHSkillId", skillId);
				candidateSkillEntity.Save();
			}
		}

		private List<CandidateInfo> SendRequest(HttpRequestConfig requestConfig) {
			var response = HttpRequestClient.Send(requestConfig);
			if (response == null || response.StatusCode != HttpStatusCode.OK) {
				var message = response?.Exception?.Message ?? response?.Content ?? response?.ReasonPhrase;
				Logger.Error(message);
				return new List<CandidateInfo>();
			}
			return JsonConvert.DeserializeObject<CandidateInfos>(response.Content)?.Candidates;
		}

		#endregion Private Methods

		#region Protected Methods

		protected override bool InternalExecute(ProcessExecutingContext context) {
			var candidateInfos = GetCandidateInfos();
			PopulateCandidates(candidateInfos);
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