namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AkvRealtyServiceSchema

	/// <exclude/>
	public class AkvRealtyServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AkvRealtyServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AkvRealtyServiceSchema(AkvRealtyServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("dc91fbf0-8b7e-4956-a648-f2afeebe2145");
			Name = "AkvRealtyService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("3822f213-53d6-4bd8-afdf-8e69f0214c40");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,208,215,47,206,207,77,85,72,86,86,72,206,79,73,85,200,72,45,74,213,211,211,227,229,2,0,114,219,130,83,25,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("dc91fbf0-8b7e-4956-a648-f2afeebe2145"));
		}

		#endregion

	}

	#endregion

}

