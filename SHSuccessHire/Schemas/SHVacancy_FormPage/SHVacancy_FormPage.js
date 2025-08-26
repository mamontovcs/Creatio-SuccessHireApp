define("SHVacancy_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "CardToolsContainer"
			},
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "move",
				"name": "CardButtonToggleGroup",
				"parentName": "MainHeaderBottom",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "SideContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "merge",
				"name": "CenterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "CenterContainer",
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 0
			},
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
				"name": "GeneralInfoTabContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
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
				"name": "FeedTabContainer",
				"values": {
					"caption": "#ResourceString(FeedTabContainer_caption)#",
					"icon": "goal-icon",
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "insert",
				"name": "StartSearchButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(StartSearchButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "SHSearchCandidatesProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "Vacancy"
						}
					},
					"clickMode": "default",
					"icon": "send-test-email-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Title",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.SHVacancyDS_SHTitle_fmfgghc",
					"labelPosition": "above",
					"control": "$SHVacancyDS_SHTitle_fmfgghc",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Account",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SHVacancyDS_SHAccount_l04y821",
					"labelPosition": "above",
					"control": "$SHVacancyDS_SHAccount_l04y821",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_ff4vxq8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ff4vxq8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Account",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_fsqioi1",
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
				"name": "GridContainer_elo1z0m",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
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
				"parentName": "GridContainer_fsqioi1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_b1uqvtl",
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
					"title": "#ResourceString(ExpansionPanel_b1uqvtl_title)#",
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
				"parentName": "GridContainer_elo1z0m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_6v60gcy",
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
				"parentName": "ExpansionPanel_b1uqvtl",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_00rppwi",
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
				"parentName": "GridContainer_6v60gcy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_vertlqf",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_vertlqf_caption)#",
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
				"parentName": "FlexContainer_00rppwi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_r0fipg6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_r0fipg6_caption)#",
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
							"dataSourceName": "GridDetail_0pymbquDS"
						}
					}
				},
				"parentName": "FlexContainer_00rppwi",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_haio3ui",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_haio3ui_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_00rppwi",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_xw4vu4z",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_xw4vu4z_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_0pymbqu"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_haio3ui",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ceaysss",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ceaysss_caption)#",
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
				"parentName": "GridDetailSettingsBtn_haio3ui",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_zhjxqcs",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_zhjxqcs_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_zhjxqcs_GridDetail_0pymbqu",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_0pymbqu"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_zhjxqcs_SearchValue",
							"GridDetailSearchFilter_zhjxqcs_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_00rppwi",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_bzgw2vc",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				"parentName": "ExpansionPanel_b1uqvtl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_0pymbqu",
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
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_0pymbqu",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_0pymbquDS_Id",
					"columns": [
						{
							"id": "5be360a5-1142-ae77-9801-3d22b1df8af6",
							"code": "GridDetail_0pymbquDS_SHCandidate",
							"caption": "#ResourceString(GridDetail_0pymbquDS_SHCandidate)#",
							"dataValueType": 10,
							"width": 286
						},
						{
							"id": "8dc5e8db-c6e7-09b4-daf0-b3859189268b",
							"code": "GridDetail_0pymbquDS_SHCandidateSHContact",
							"caption": "#ResourceString(GridDetail_0pymbquDS_SHCandidateSHContact)#",
							"dataValueType": 10,
							"width": 370
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_bzgw2vc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_hpg84ag",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": false
						},
						"editable": {
							"enable": true,
							"itemsCreation": true,
							"floatingEditPanel": true
						}
					},
					"items": "$DataGrid_hpg84ag",
					"selectionState": "$DataGrid_hpg84ag_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_hpg84ag_SelectionState"
					},
					"primaryColumnName": "DataGrid_hpg84agDS_Id",
					"columns": [
						{
							"id": "fcb62d01-2d65-04f5-e17b-22c56b4605a4",
							"code": "DataGrid_hpg84agDS_SHSkill",
							"caption": "#ResourceString(DataGrid_hpg84agDS_SHSkill)#",
							"dataValueType": 10,
							"width": 282
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "FeedTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_hpg84ag_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_hpg84agDS",
							"filters": "$DataGrid_hpg84ag | crt.ToCollectionFilters : 'DataGrid_hpg84ag' : $DataGrid_hpg84ag_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_hpg84ag_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_hpg84ag",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_hpg84ag_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_hpg84agDS",
							"filters": "$DataGrid_hpg84ag | crt.ToCollectionFilters : 'DataGrid_hpg84ag' : $DataGrid_hpg84ag_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_hpg84ag_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_hpg84ag_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_hpg84ag_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_hpg84agDS",
							"filters": "$DataGrid_hpg84ag | crt.ToCollectionFilters : 'DataGrid_hpg84ag' : $DataGrid_hpg84ag_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_hpg84ag_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_hpg84ag",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Skills",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Skills_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"headingLevel": "label"
				},
				"parentName": "FeedTabContainer",
				"propertyName": "tools",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_hpg84ag": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_hpg84agDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "SHSkill"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_hpg84agDS_SHSkill": {
									"modelConfig": {
										"path": "DataGrid_hpg84agDS.SHSkill"
									}
								},
								"DataGrid_hpg84agDS_Id": {
									"modelConfig": {
										"path": "DataGrid_hpg84agDS.Id"
									}
								}
							}
						}
					},
					"SHVacancyDS_SHTitle_fmfgghc": {
						"modelConfig": {
							"path": "SHVacancyDS.SHTitle"
						}
					},
					"SHVacancyDS_SHAccount_l04y821": {
						"modelConfig": {
							"path": "SHVacancyDS.SHAccount"
						}
					},
					"GridDetail_0pymbqu": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_0pymbquDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_zhjxqcs_GridDetail_0pymbqu",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_0pymbquDS_SHCandidate": {
									"modelConfig": {
										"path": "GridDetail_0pymbquDS.SHCandidate"
									}
								},
								"GridDetail_0pymbquDS_SHCandidateSHContact": {
									"modelConfig": {
										"path": "GridDetail_0pymbquDS.SHCandidateSHContact"
									}
								},
								"GridDetail_0pymbquDS_Id": {
									"modelConfig": {
										"path": "GridDetail_0pymbquDS.Id"
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
					"CardState"
				],
				"values": {
					"modelConfig": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "SHVacancyDS",
					"dependencies": {
						"DataGrid_hpg84agDS": [
							{
								"attributePath": "SHVacancy",
								"relationPath": "SHVacancyDS.Id"
							}
						],
						"GridDetail_0pymbquDS": [
							{
								"attributePath": "SHVacancy",
								"relationPath": "SHVacancyDS.Id"
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
					"SHVacancyDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "SHVacancy",
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
					"DataGrid_hpg84agDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SHVacancySkill",
							"attributes": {
								"SHSkill": {
									"path": "SHSkill"
								}
							}
						}
					},
					"GridDetail_0pymbquDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SHVacancyCandidate",
							"attributes": {
								"SHCandidate": {
									"path": "SHCandidate"
								},
								"SHCandidateSHContact": {
									"type": "ForwardReference",
									"path": "SHCandidate.SHContact"
								}
							}
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