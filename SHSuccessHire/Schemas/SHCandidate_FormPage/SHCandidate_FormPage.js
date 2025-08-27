define("SHCandidate_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "MainHeaderBottom"
			},
			{
				"operation": "remove",
				"name": "CardToolsContainer"
			},
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "remove",
				"name": "CardToggleContainer"
			},
			{
				"operation": "merge",
				"name": "RightAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "FlexWarningContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "center",
					"justifyContent": "start",
					"gap": "extra-small",
					"wrap": "wrap"
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WarningIcon",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WarningIcon_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"icon": "warning-filled-icon"
				},
				"parentName": "FlexWarningContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_2g6p1gv",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_2g6p1gv_caption)#)#",
					"labelType": "body",
					"labelThickness": "bold",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "FlexWarningContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_t0x22mw",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_t0x22mw_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FF4013",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "FlexWarningContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_j4752wz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.CandidateDS_SHTitle_sd1awdt",
					"labelPosition": "above",
					"control": "$CandidateDS_SHTitle_sd1awdt",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_hq3ajyu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_noyw8hl",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.CandidateDS_ModifiedOn_z7ugzks",
					"labelPosition": "auto",
					"control": "$CandidateDS_ModifiedOn_z7ugzks",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_hq3ajyu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_fmhlcin",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CandidateDS_SHContact_2mq10v8",
					"labelPosition": "above",
					"control": "$CandidateDS_SHContact_2mq10v8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_hq3ajyu",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_6xz55ld",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6xz55ld_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_fmhlcin",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_shabbi6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CandidateDS_SHContactAge_g4xcvo8",
					"labelPosition": "above",
					"control": "$CandidateDS_SHContactAge_g4xcvo8",
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_hq3ajyu",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_m81r931",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CandidateDS_SHContactCity_y27zw5p",
					"labelPosition": "above",
					"control": "$CandidateDS_SHContactCity_y27zw5p",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_hq3ajyu",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_3ahs6t3",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3ahs6t3_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_m81r931",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_1kkwr99",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CandidateDS_SHCandidateStatus_mpeaf3n",
					"labelPosition": "above",
					"control": "$CandidateDS_SHCandidateStatus_mpeaf3n",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_hq3ajyu",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_hniwh6s",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_hniwh6s_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_1kkwr99",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_8fzu3ll",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_d01kju3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_d01kju3_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "medium",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_8fzu3ll",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_j2e2vd9",
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
				"parentName": "ExpansionPanel_d01kju3",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_q5c07vh",
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
				"parentName": "GridContainer_j2e2vd9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_imvxv5k",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_imvxv5k_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "SHVacancyCandidate"
						}
					}
				},
				"parentName": "FlexContainer_q5c07vh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_9g426op",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_9g426op_caption)#",
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
							"dataSourceName": "GridDetail_36u4nnfDS"
						}
					}
				},
				"parentName": "FlexContainer_q5c07vh",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_3znueaa",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_3znueaa_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_q5c07vh",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_wq5bdsg",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_wq5bdsg_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_36u4nnf"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3znueaa",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_us67bsc",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_us67bsc_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "SHVacancyCandidate"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3znueaa",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_evvsdsf",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_evvsdsf_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_evvsdsf_GridDetail_36u4nnf",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_36u4nnf"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_evvsdsf_SearchValue",
							"GridDetailSearchFilter_evvsdsf_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_q5c07vh",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_bu3diiy",
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
				"parentName": "ExpansionPanel_d01kju3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_36u4nnf",
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
							"selection": false,
							"numeration": true
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_36u4nnf",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_36u4nnfDS_Id",
					"columns": [
						{
							"id": "48b69e9e-cc92-0f6b-9753-30609dd3ecd9",
							"code": "GridDetail_36u4nnfDS_SHVacancy",
							"caption": "#ResourceString(GridDetail_36u4nnfDS_SHVacancy)#",
							"dataValueType": 10,
							"width": 502
						},
						{
							"id": "71c2cfeb-6131-be1b-1239-3f941305a93d",
							"code": "GridDetail_36u4nnfDS_SHMatchScore",
							"caption": "#ResourceString(GridDetail_36u4nnfDS_SHMatchScore)#",
							"dataValueType": 32
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_bu3diiy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_1low4p4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_8fzu3ll",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_sw5fqo6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_sw5fqo6_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_1low4p4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_l1ruqh4",
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
				"parentName": "ExpansionPanel_sw5fqo6",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_dpsjoom",
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
				"parentName": "GridContainer_l1ruqh4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_9202zff",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_9202zff_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "SHInterview"
						}
					}
				},
				"parentName": "FlexContainer_dpsjoom",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_h95kj5j",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_h95kj5j_caption)#",
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
							"dataSourceName": "GridDetail_mo9k204DS"
						}
					}
				},
				"parentName": "FlexContainer_dpsjoom",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_jjcctdk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_jjcctdk_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_dpsjoom",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_4sgc5gr",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_4sgc5gr_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_mo9k204"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_jjcctdk",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_kmitpa5",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_kmitpa5_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "SHInterview"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_jjcctdk",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ngfrad4",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ngfrad4_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_ngfrad4_GridDetail_mo9k204",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_mo9k204"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_ngfrad4_SearchValue",
							"GridDetailSearchFilter_ngfrad4_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_dpsjoom",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_xs871zn",
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
				"parentName": "ExpansionPanel_sw5fqo6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_mo9k204",
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
						}
					},
					"items": "$GridDetail_mo9k204",
					"primaryColumnName": "GridDetail_mo9k204DS_Id",
					"columns": [
						{
							"id": "134ee0ed-59bc-730d-1aa3-d760be4b7fff",
							"code": "GridDetail_mo9k204DS_SHName",
							"caption": "#ResourceString(GridDetail_mo9k204DS_SHName)#",
							"dataValueType": 28
						},
						{
							"id": "32ebfce8-1ab7-2829-7a6b-0203bf19bb06",
							"code": "GridDetail_mo9k204DS_SHVacancy",
							"caption": "#ResourceString(GridDetail_mo9k204DS_SHVacancy)#",
							"dataValueType": 10
						},
						{
							"id": "044fb26e-3f50-d36c-157f-64e36eda59cd",
							"code": "GridDetail_mo9k204DS_SHCandidate",
							"caption": "#ResourceString(GridDetail_mo9k204DS_SHCandidate)#",
							"dataValueType": 10
						},
						{
							"id": "cd2d2dac-984d-e615-a67e-e61edfbe725d",
							"code": "GridDetail_mo9k204DS_SHInterviewStatus",
							"caption": "#ResourceString(GridDetail_mo9k204DS_SHInterviewStatus)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_xs871zn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_zpekin4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_zpekin4_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "RightAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_m4f2ov8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_m4f2ov8",
					"primaryColumnName": "DataGrid_m4f2ov8DS_Id",
					"columns": [
						{
							"id": "faba5904-ba1e-d0d8-95c3-3c0d872a5443",
							"code": "DataGrid_m4f2ov8DS_SHSkill",
							"caption": "#ResourceString(DataGrid_m4f2ov8DS_SHSkill)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "RightAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_m4f2ov8": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_m4f2ov8DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_m4f2ov8DS_SHSkill": {
									"modelConfig": {
										"path": "DataGrid_m4f2ov8DS.SHSkill"
									}
								},
								"DataGrid_m4f2ov8DS_Id": {
									"modelConfig": {
										"path": "DataGrid_m4f2ov8DS.Id"
									}
								}
							}
						}
					},
					"CandidateDS_SHContact_2mq10v8": {
						"modelConfig": {
							"path": "CandidateDS.SHContact"
						}
					},
					"CandidateDS_SHTitle_sd1awdt": {
						"modelConfig": {
							"path": "CandidateDS.SHTitle"
						}
					},
					"CandidateDS_ModifiedOn_z7ugzks": {
						"modelConfig": {
							"path": "CandidateDS.ModifiedOn"
						}
					},
					"GridDetail_36u4nnf": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_36u4nnfDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_evvsdsf_GridDetail_36u4nnf",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_36u4nnfDS_SHVacancy": {
									"modelConfig": {
										"path": "GridDetail_36u4nnfDS.SHVacancy"
									}
								},
								"GridDetail_36u4nnfDS_SHMatchScore": {
									"modelConfig": {
										"path": "GridDetail_36u4nnfDS.SHMatchScore"
									}
								},
								"GridDetail_36u4nnfDS_Id": {
									"modelConfig": {
										"path": "GridDetail_36u4nnfDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_mo9k204": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_mo9k204DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_ngfrad4_GridDetail_mo9k204",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_mo9k204DS_SHName": {
									"modelConfig": {
										"path": "GridDetail_mo9k204DS.SHName"
									}
								},
								"GridDetail_mo9k204DS_SHVacancy": {
									"modelConfig": {
										"path": "GridDetail_mo9k204DS.SHVacancy"
									}
								},
								"GridDetail_mo9k204DS_SHCandidate": {
									"modelConfig": {
										"path": "GridDetail_mo9k204DS.SHCandidate"
									}
								},
								"GridDetail_mo9k204DS_SHInterviewStatus": {
									"modelConfig": {
										"path": "GridDetail_mo9k204DS.SHInterviewStatus"
									}
								},
								"GridDetail_mo9k204DS_Id": {
									"modelConfig": {
										"path": "GridDetail_mo9k204DS.Id"
									}
								}
							}
						}
					},
					"CandidateDS_SHContactAge_g4xcvo8": {
						"modelConfig": {
							"path": "CandidateDS.SHContactAge_g4xcvo8"
						}
					},
					"CandidateDS_SHContactCity_y27zw5p": {
						"modelConfig": {
							"path": "CandidateDS.SHContactCity_y27zw5p"
						}
					},
					"CandidateDS_SHCandidateStatus_mpeaf3n": {
						"modelConfig": {
							"path": "CandidateDS.SHCandidateStatus"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"CandidateDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "SHCandidate",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false,
								"attributes": {
									"SHContactAge_g4xcvo8": {
										"path": "SHContact.Age",
										"type": "ForwardReference"
									},
									"SHContactCity_y27zw5p": {
										"path": "SHContact.City",
										"type": "ForwardReference"
									}
								}
							}
						},
						"DataGrid_m4f2ov8DS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "SHCandidateSkill",
								"attributes": {
									"SHSkill": {
										"path": "SHSkill"
									}
								}
							}
						},
						"GridDetail_36u4nnfDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "SHVacancyCandidate",
								"attributes": {
									"SHVacancy": {
										"path": "SHVacancy"
									},
									"SHMatchScore": {
										"path": "SHMatchScore"
									}
								}
							}
						},
						"GridDetail_mo9k204DS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "SHInterview",
								"attributes": {
									"SHName": {
										"path": "SHName"
									},
									"SHVacancy": {
										"path": "SHVacancy"
									},
									"SHCandidate": {
										"path": "SHCandidate"
									},
									"SHInterviewStatus": {
										"path": "SHInterviewStatus"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "CandidateDS",
					"dependencies": {
						"DataGrid_m4f2ov8DS": [
							{
								"attributePath": "SHCandidate",
								"relationPath": "CandidateDS.Id"
							}
						],
						"GridDetail_36u4nnfDS": [
							{
								"attributePath": "SHCandidate",
								"relationPath": "CandidateDS.Id"
							}
						],
						"GridDetail_mo9k204DS": [
							{
								"attributePath": "SHCandidate",
								"relationPath": "CandidateDS.Id"
							}
						]
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});