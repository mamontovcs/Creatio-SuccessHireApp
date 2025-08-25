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
							"processName": "SHSearchCandidates",
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
							"dataValueType": 10
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
							"path": "DataGrid_hpg84agDS"
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
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});