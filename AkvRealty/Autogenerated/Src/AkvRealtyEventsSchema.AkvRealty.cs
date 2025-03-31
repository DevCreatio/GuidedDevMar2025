namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AkvRealtyEventsSchema

	/// <exclude/>
	public class AkvRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AkvRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AkvRealtyEventsSchema(AkvRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("bb0b6705-a4ae-4c03-82ef-4637832ba887");
			Name = "AkvRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("3822f213-53d6-4bd8-afdf-8e69f0214c40");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,193,110,219,48,12,189,7,200,63,16,198,14,118,17,168,237,117,217,10,52,65,54,20,40,182,161,113,119,25,118,80,100,198,213,38,75,134,40,187,203,138,254,251,36,203,94,19,187,3,198,139,44,234,241,241,61,154,154,87,72,53,23,8,57,90,203,201,236,29,91,27,189,151,101,99,185,147,70,207,103,79,243,217,124,6,62,26,146,186,132,237,129,28,86,203,227,212,113,105,85,25,253,207,71,139,108,163,157,116,18,233,127,48,108,211,162,118,3,244,91,151,62,116,185,91,233,69,104,180,233,86,60,96,197,63,121,23,240,30,146,123,178,119,200,149,59,36,217,247,65,117,221,236,148,20,32,20,39,130,248,250,10,17,188,133,21,39,124,237,229,252,236,236,60,82,61,197,227,136,213,180,94,185,44,16,90,35,11,248,172,183,188,245,126,82,179,251,129,194,1,161,46,208,46,32,178,174,112,239,205,117,220,215,182,36,192,236,133,238,136,57,196,206,75,97,127,217,6,26,204,150,167,176,200,11,182,51,229,253,167,49,145,197,130,17,184,64,33,43,174,160,182,82,132,97,197,42,246,17,93,126,168,177,88,27,213,84,250,43,87,13,190,235,161,87,105,114,253,179,253,18,240,73,104,125,202,39,247,144,70,174,43,184,188,24,34,59,5,141,124,133,64,118,67,107,174,5,42,44,188,12,103,27,92,78,81,228,108,88,12,191,156,196,75,204,177,170,21,119,65,182,198,71,184,53,130,43,249,155,239,20,110,59,92,218,155,185,39,180,126,123,181,31,190,95,93,118,135,100,26,43,60,200,88,207,178,152,182,9,17,76,246,123,209,173,91,178,128,100,210,129,88,55,154,27,202,141,89,201,50,222,146,140,229,166,87,48,29,208,212,134,151,31,19,236,131,177,21,119,233,200,158,111,124,201,46,86,111,146,241,143,14,225,30,172,121,236,236,111,126,9,172,131,193,161,126,12,127,126,185,246,159,254,120,254,3,230,69,229,78,235,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("52273fac-3316-fa04-4bce-3086cbed81b3"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("3822f213-53d6-4bd8-afdf-8e69f0214c40"),
				CreatedInSchemaUId = new Guid("bb0b6705-a4ae-4c03-82ef-4637832ba887"),
				ModifiedInSchemaUId = new Guid("bb0b6705-a4ae-4c03-82ef-4637832ba887")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("bb0b6705-a4ae-4c03-82ef-4637832ba887"));
		}

		#endregion

	}

	#endregion

}

