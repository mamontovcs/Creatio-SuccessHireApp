define("SHCandidate_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
								"allowCopyingRecords": false
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
						}
					},
					"primaryDataSourceName": "CandidateDS",
					"dependencies": {
						"DataGrid_m4f2ov8DS": [
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