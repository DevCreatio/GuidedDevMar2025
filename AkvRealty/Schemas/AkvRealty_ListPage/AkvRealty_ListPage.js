define("AkvRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AkvRealty"
						}
					}
				}
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "AkvRealty"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_AkvName",
							"caption": "#ResourceString(PDS_AkvName)#",
							"dataValueType": 1,
							"width": 105
						},
						{
							"id": "dd5413bb-7540-294f-235d-d91fd69e5bcd",
							"code": "PDS_AkvPrice",
							"caption": "#ResourceString(PDS_AkvPrice)#",
							"dataValueType": 32,
							"width": 130
						},
						{
							"id": "1982f83f-091f-92f8-4209-29fbf2d39ba9",
							"code": "PDS_AkvType",
							"caption": "#ResourceString(PDS_AkvType)#",
							"dataValueType": 10,
							"width": 95
						},
						{
							"id": "d1e77edf-9d85-9841-27ab-64ffb1f51dde",
							"code": "PDS_AkvOffertype",
							"caption": "#ResourceString(PDS_AkvOffertype)#",
							"dataValueType": 10,
							"width": 127
						},
						{
							"id": "9ba5619f-a465-8210-6868-d75e9ca414c3",
							"code": "PDS_AkvManager",
							"caption": "#ResourceString(PDS_AkvManager)#",
							"dataValueType": 10,
							"width": 152
						},
						{
							"id": "c6c1c121-f131-eb0a-0b66-f35bd974b415",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 143
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true,
					"fitContent": true
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_AkvName": {
						"modelConfig": {
							"path": "PDS.AkvName"
						}
					},
					"PDS_AkvPrice": {
						"modelConfig": {
							"path": "PDS.AkvPrice"
						}
					},
					"PDS_AkvType": {
						"modelConfig": {
							"path": "PDS.AkvType"
						}
					},
					"PDS_AkvOffertype": {
						"modelConfig": {
							"path": "PDS.AkvOffertype"
						}
					},
					"PDS_AkvManager": {
						"modelConfig": {
							"path": "PDS.AkvManager"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "AkvRealty",
					"attributes": {
						"AkvName": {
							"path": "AkvName"
						},
						"AkvPrice": {
							"path": "AkvPrice"
						},
						"AkvType": {
							"path": "AkvType"
						},
						"AkvOffertype": {
							"path": "AkvOffertype"
						},
						"AkvManager": {
							"path": "AkvManager"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});