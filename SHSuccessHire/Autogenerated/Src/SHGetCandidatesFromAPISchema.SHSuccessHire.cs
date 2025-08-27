namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	#region Class: SHGetCandidatesFromAPI

	/// <exclude/>
	public partial class SHGetCandidatesFromAPI : ProcessUserTask
	{

		#region Constructors: Public

		public SHGetCandidatesFromAPI(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("cd5cb7d2-b907-42a5-a72a-f9a7a4316ddc");
		}

		#endregion

		#region Methods: Public

		public override void WritePropertiesData(DataWriter writer) {
			writer.WriteStartObject(Name);
			base.WritePropertiesData(writer);
			if (Status == Core.Process.ProcessStatus.Inactive) {
				writer.WriteFinishObject();
				return;
			}
			writer.WriteFinishObject();
		}

		#endregion

	}

	#endregion

}

