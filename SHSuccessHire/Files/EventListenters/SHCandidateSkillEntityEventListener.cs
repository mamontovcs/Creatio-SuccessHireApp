using System;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace SHSuccessHire.EventListenters {

	[EntityEventListener(SchemaName = "SHCandidateSkill")]
	public class SHCandidateSkillEntityEventListener : BaseEntityEventListener {

		#region Public Methods

		public override void OnSaved(object sender, EntityAfterEventArgs e) {
			base.OnSaved(sender, e);
			var entity = (Entity)sender;
			var candidateId = entity.GetTypedColumnValue<Guid>("SHCandidateId");
			var candidateSchema = entity.UserConnection.EntitySchemaManager.GetInstanceByName("SHCandidate");
			var candidateEntity = candidateSchema.CreateEntity(entity.UserConnection);
			candidateEntity.FetchFromDB("Id", candidateId);
			candidateEntity.SetColumnValue("ModifiedOn", DateTime.UtcNow);
			candidateEntity.Save();
		}

		#endregion Public Methods
	}
}