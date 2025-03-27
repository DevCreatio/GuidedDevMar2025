define("AkvRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "AkvRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "be046865-975e-4630-951e-185358848b7e",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Action",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Action_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalcAvgPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CalcAvgPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "AkvCalAvgRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyId"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "Action",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GetMaxPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GetMaxPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "Akv.RunMaxPriceWebServiceRequest"
					},
					"icon": "copilot-rewrite-btn-icon"
				},
				"parentName": "Action",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "database-icon",
					"clicked": {
						"request": "Akv.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AkvName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.AkvName",
					"control": "$AkvName",
					"labelPosition": "above",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AkvPrice_83uk9fz",
					"labelPosition": "above",
					"control": "$PDS_AkvPrice_83uk9fz",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AreaSqFt",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AkvAreaSqFt_k0r8my6",
					"labelPosition": "above",
					"control": "$PDS_AkvAreaSqFt_k0r8my6",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AkvCommission_e9oazyy",
					"labelPosition": "above",
					"control": "$PDS_AkvCommission_e9oazyy",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_AkvNumber_m91x41g",
					"labelPosition": "above",
					"control": "$PDS_AkvNumber_m91x41g",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AkvType_4kok86h",
					"labelPosition": "above",
					"control": "$PDS_AkvType_4kok86h",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Offertype",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AkvOffertype_l17td3h",
					"labelPosition": "above",
					"control": "$PDS_AkvOffertype_l17td3h",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_AkvComment_6r4akv9",
					"labelPosition": "above",
					"control": "$PDS_AkvComment_6r4akv9",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AkvOffertypeAkvCommissionPercent_nev5zmr",
					"control": "$PDS_AkvOffertypeAkvCommissionPercent_nev5zmr",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AkvCountry_k5lnidg",
					"labelPosition": "above",
					"control": "$PDS_AkvCountry_k5lnidg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AkvManager_s8yliqv",
					"labelPosition": "above",
					"control": "$PDS_AkvManager_s8yliqv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AkvCity_p8v5pui",
					"labelPosition": "above",
					"control": "$PDS_AkvCity_p8v5pui",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_19r3bu9",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_19r3bu9_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_vn0fcld",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_19r3bu9",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mtx8o68",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_vn0fcld",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_uz80u99",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_uz80u99_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AkvRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "AkvParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_mtx8o68",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_xnicrsc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_xnicrsc_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_undr4exDS"
						}
					}
				},
				"parentName": "FlexContainer_mtx8o68",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_dc13pmy",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_dc13pmy_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_mtx8o68",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_85dehur",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_85dehur_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_dc13pmy",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_5kz97v6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_5kz97v6_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AkvRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_dc13pmy",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_i1aspra",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_i1aspra_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_i1aspra_GridDetail_undr4ex",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_undr4ex"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_i1aspra_SearchValue",
							"GridDetailSearchFilter_i1aspra_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_mtx8o68",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_el67egz",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_19r3bu9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_undr4ex",
					"activeRow": "$GridDetail_undr4ex_ActiveRow",
					"selectionState": "$GridDetail_undr4ex_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_undr4ex_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_undr4exDS_Id",
					"columns": [
						{
							"id": "86579e2b-f108-c2a4-22cb-7ada0b0a9dc8",
							"code": "GridDetail_undr4exDS_AkvVisitDateTime",
							"caption": "#ResourceString(GridDetail_undr4exDS_AkvVisitDateTime)#",
							"dataValueType": 7,
							"width": 189
						},
						{
							"id": "f92ffd3c-2398-4596-86ed-783a9ed5c424",
							"code": "GridDetail_undr4exDS_AkvPotentialCustomer",
							"caption": "#ResourceString(GridDetail_undr4exDS_AkvPotentialCustomer)#",
							"dataValueType": 10,
							"width": 190
						},
						{
							"id": "2320c685-5d42-28a0-9d11-936c3302ce71",
							"code": "GridDetail_undr4exDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_undr4exDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 133
						},
						{
							"id": "adcb6176-de9e-6b45-988e-3aa68854c649",
							"code": "GridDetail_undr4exDS_AkvComment",
							"caption": "#ResourceString(GridDetail_undr4exDS_AkvComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_el67egz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_undr4ex_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_undr4exDS",
							"filters": "$GridDetail_undr4ex | crt.ToCollectionFilters : 'GridDetail_undr4ex' : $GridDetail_undr4ex_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_undr4ex_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_undr4ex_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_undr4exDS",
							"filters": "$GridDetail_undr4ex | crt.ToCollectionFilters : 'GridDetail_undr4ex' : $GridDetail_undr4ex_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_undr4ex_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_undr4ex_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_undr4ex_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyGridDetail",
							"filters": "$GridDetail_undr4ex | crt.ToCollectionFilters : 'GridDetail_undr4ex' : $GridDetail_undr4ex_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_undr4ex_SelectionState"
						}
					}
				},
				"parentName": "RealtyGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_undr4ex_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_undr4exDS",
							"filters": "$GridDetail_undr4ex | crt.ToCollectionFilters : 'GridDetail_undr4ex' : $GridDetail_undr4ex_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_undr4ex_SelectionState"
						}
					}
				},
				"parentName": "RealtyGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"AkvName": {
						"modelConfig": {
							"path": "PDS.AkvName"
						}
					},
					"PDS_AkvPrice_83uk9fz": {
						"modelConfig": {
							"path": "PDS.AkvPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "Akv.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_AkvAreaSqFt_k0r8my6": {
						"modelConfig": {
							"path": "PDS.AkvAreaSqFt"
						},
						"validators": {
							"MySuperValidator": {
								"type": "Akv.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_AkvType_4kok86h": {
						"modelConfig": {
							"path": "PDS.AkvType"
						}
					},
					"PDS_AkvOffertype_l17td3h": {
						"modelConfig": {
							"path": "PDS.AkvOffertype"
						}
					},
					"PDS_AkvComment_6r4akv9": {
						"modelConfig": {
							"path": "PDS.AkvComment"
						}
					},
					"PDS_AkvManager_s8yliqv": {
						"modelConfig": {
							"path": "PDS.AkvManager"
						}
					},
					"PDS_AkvNumber_m91x41g": {
						"modelConfig": {
							"path": "PDS.AkvNumber"
						}
					},
					"PDS_AkvCountry_k5lnidg": {
						"modelConfig": {
							"path": "PDS.AkvCountry"
						}
					},
					"PDS_AkvCity_p8v5pui": {
						"modelConfig": {
							"path": "PDS.AkvCity"
						}
					},
					"PDS_AkvCommission_e9oazyy": {
						"modelConfig": {
							"path": "PDS.AkvCommission"
						}
					},
					"PDS_AkvOffertypeAkvCommissionPercent_nev5zmr": {
						"modelConfig": {
							"path": "PDS.AkvOffertypeAkvCommissionPercent_nev5zmr"
						}
					},
					"GridDetail_undr4ex": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_undr4exDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_i1aspra_GridDetail_undr4ex",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "CreatedOn"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_undr4exDS_AkvVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_undr4exDS.AkvVisitDateTime"
									}
								},
								"GridDetail_undr4exDS_AkvPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_undr4exDS.AkvPotentialCustomer"
									}
								},
								"GridDetail_undr4exDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_undr4exDS.CreatedOn"
									}
								},
								"GridDetail_undr4exDS_AkvComment": {
									"modelConfig": {
										"path": "GridDetail_undr4exDS.AkvComment"
									}
								},
								"GridDetail_undr4exDS_Id": {
									"modelConfig": {
										"path": "GridDetail_undr4exDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_undr4exDS": [
							{
								"attributePath": "AkvParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "AkvRealty",
							"attributes": {
								"AkvOffertypeAkvCommissionPercent_nev5zmr": {
									"path": "AkvOffertype.AkvCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_undr4exDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AkvRealtyVisit",
							"attributes": {
								"AkvVisitDateTime": {
									"path": "AkvVisitDateTime"
								},
								"AkvPotentialCustomer": {
									"path": "AkvPotentialCustomer"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"AkvComment": {
									"path": "AkvComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			
			{
				request: "Akv.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_AkvPrice_83uk9fz;
					console.log("Price = " + price);
					request.$context.PDS_AkvPrice_83uk9fz = price * 1.2;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);

				}

			},
			
        {
          request: "crt.HandleViewModelAttributeChangeRequest",
            /* The custom implementation of the system query handler. */
            handler: async (request, next) => {
			 if (request.attributeName === 'PDS_AkvPrice_83uk9fz' ||   // if price changed
         request.attributeName === 'PDS_AkvOffertypeAkvCommissionPercent_nev5zmr' ) {    // or percent changed
				 /*use esternal editor to write this comment*/
				 debugger;
                    var price = await request.$context.PDS_AkvPrice_83uk9fz;
                    var percent = await request.$context.PDS_AkvOffertypeAkvCommissionPercent_nev5zmr;
                    var commission = price * percent / 100;
                    request.$context.PDS_AkvCommission_e9oazyy = commission;
                }
                /* Call the next handler if it exists and return its result. */
                return next?.handle(request);
            }
        },
			{
				request: "Akv.RunMaxPriceWebServiceRequest",
				
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {

					console.log("Run web service button works...");

					// get id from type lookup type object
					var typeObject = await request.$context.PDS_AkvType_4kok86h;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;

					}
 
					// get id from type lookup offer type object
					var offerTypeObject = await request.$context.PDS_AkvOffertype_l17td3h;
					var offerTypeId = "";
					if (offerTypeObject) {

						offerTypeId = offerTypeObject.value;
					}

						
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();
					
					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetMaxPriceByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);					
					//const endpoint "http://localhost/D1_Studio/0/rest/RealtyService/GetMaxPriceByTypeId";

					/* Send a POST HTTP request. The HTTP client 
			converts the response body from JSON to a JS 
			object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);			
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			} 
			]/**SCHEMA_HANDLERS*/,
			converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
			validators: /**SCHEMA_VALIDATORS*/{
			
			"Akv.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"Akv.DGValidator": { 
									message: config.message
								}
							};
							
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});