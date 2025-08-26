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

	#region Class: SHSearchCandidates

	[DesignModeProperty(Name = "Vacancy", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f2c03ee4bd784fd3ad1af28eef385722", CaptionResourceItem = "Parameters.Vacancy.Caption", DescriptionResourceItem = "Parameters.Vacancy.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class SHSearchCandidates : ProcessUserTask
	{

		#region Constructors: Public

		public SHSearchCandidates(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("f2c03ee4-bd78-4fd3-ad1a-f28eef385722");
		}

		#endregion

		#region Properties: Public

		public virtual Guid Vacancy {
			get;
			set;
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
			if (UseFlowEngineMode) {
				if (!HasMapping("Vacancy")) {
					writer.WriteValue("Vacancy", Vacancy, Guid.Empty);
				}
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "Vacancy":
					if (!UseFlowEngineMode) {
						break;
					}
					Vacancy = reader.GetGuidValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

