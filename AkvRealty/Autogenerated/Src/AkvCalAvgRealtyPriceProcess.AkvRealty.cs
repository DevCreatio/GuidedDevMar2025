namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: AkvCalAvgRealtyPriceProcessMethodsWrapper

	/// <exclude/>
	public class AkvCalAvgRealtyPriceProcessMethodsWrapper : ProcessModel
	{

		public AkvCalAvgRealtyPriceProcessMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "AkvRealty"); //EntitySchemaQuery --> used to read data from database
			var priceColumn = esq.AddColumn("AkvPrice");  // SELECT UsrPrice as UsrPrice, UsrArea as UsrArea FROM UsrRealty WHERE ...
			var areaColumn = esq.AddColumn("AkvAreaSqFt");
			
			Guid typeId = Get<Guid>("RealtyTypeIdParameter"); //RealtyTypeIdParameter --> input data
			Guid offerTypeId = Get<Guid>("RealtyOfferTypeIdParameter");
			
			var typeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "AkvType", typeId); //CreateFilterWithParameters -->used for comparison
			esq.Filters.Add(typeFilter);
			
			var offerTypeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "AkvOffertype", offerTypeId); //AkvOffertype
			esq.Filters.Add(offerTypeFilter); // ... WHERE AkvTypeId = :typeId AND AkvOfferTypeId = :offerTypeId
			
			string sqlText = esq.GetSelectQuery(UserConnection).GetSqlText();
			Set("SqlTextParameter", sqlText); // only for debug purpose
			
			var entityCollection = esq.GetEntityCollection(UserConnection); //GetEntityCollection --> run a query in database
			decimal totalUSD = 0;
			decimal totalArea = 0;
			foreach(var entity in entityCollection) {
				decimal price = entity.GetTypedColumnValue<decimal>(priceColumn.Name); // reading using column alias
				decimal area = entity.GetTypedColumnValue<decimal>(areaColumn.Name); // reading using column alias
				totalUSD = totalUSD + price;
				totalArea = totalArea + area;
			}
			
			decimal result = 0;
			if (totalArea > 0) {
				result = totalUSD / totalArea;
			}
			Set("AvgPriceUSDParameter", result);
			
			return true;
		}

		#endregion

	}

	#endregion

}

