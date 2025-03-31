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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,193,110,219,48,12,189,7,200,63,16,198,14,118,17,168,237,117,89,11,52,65,54,20,40,182,161,241,118,41,118,80,100,198,213,38,75,134,36,187,203,138,254,123,41,43,94,18,187,3,198,139,44,234,241,241,61,154,154,87,232,106,46,16,114,180,150,59,179,245,108,105,244,86,150,141,229,94,26,61,157,60,79,39,211,9,80,52,78,234,18,214,59,231,177,154,31,167,142,75,171,202,232,127,62,90,100,43,237,165,151,232,254,7,195,86,45,106,223,67,31,186,244,174,203,221,73,18,161,209,166,107,241,136,21,255,76,46,224,10,146,155,95,237,61,114,229,119,73,246,163,87,93,55,27,37,5,8,197,157,131,248,250,6,17,188,135,5,119,248,214,203,249,217,217,121,164,122,142,199,17,171,105,73,185,44,16,90,35,11,248,162,215,188,37,63,169,217,252,68,225,193,161,46,208,206,32,178,46,112,75,230,58,238,27,91,58,192,236,64,119,196,28,98,67,82,216,95,182,158,6,179,249,41,44,242,130,237,76,145,255,52,38,178,88,48,0,23,40,100,197,21,212,86,138,48,172,88,197,62,161,207,119,53,22,75,163,154,74,127,231,170,193,15,123,232,117,26,6,250,53,224,147,208,250,148,79,110,33,141,92,215,112,121,209,71,118,10,26,248,10,129,236,214,45,185,22,168,176,32,25,222,54,56,31,163,156,183,97,49,104,57,29,47,49,199,170,86,220,7,217,26,159,224,206,8,174,228,31,190,81,184,238,112,233,222,204,55,135,150,182,87,211,240,105,117,217,61,58,211,88,65,32,99,137,101,54,110,19,226,176,53,113,221,146,25,36,163,14,142,117,163,185,117,185,49,11,89,198,91,146,177,220,236,21,140,7,52,182,65,242,99,130,125,52,182,226,62,29,216,163,198,151,236,98,241,46,25,254,232,16,254,209,154,167,206,254,234,183,192,58,24,236,235,135,240,151,195,117,255,73,199,203,43,252,40,233,105,235,3,0,0 };
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

