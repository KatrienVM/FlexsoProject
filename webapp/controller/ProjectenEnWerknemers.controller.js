sap.ui.define(["../controller/BaseController",
//sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./CreateProject", "./WerknemerCreate",
	"./utilities",
	"sap/ui/core/routing/History",
		"sap/ui/model/json/JSONModel"
], function(BaseController, MessageBox, CreateProject, WerknemerCreate, Utilities, History, JSONModel) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.flexsoOpdrachtMockUpFinal.controller.ProjectenEnWerknemers", {
			_onRowPress1 : function(oEvent){
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("WerknemerDetail",{
				Id : oCtx.getProperty("Id")
			});
		},
		_onRowPress : function(oEvent){
			var oItem, oCtx;
		//this.getView().setModel(this.getOwnerComponent().getModel("Proj"));        
		
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("ProjectDetail",{
				Id : oCtx.getProperty("Id")
			});
		},
		
		/*handleRouteMatched: function(oEvent) {
			var sAppId = "App5bfbaf5de2a527033389d9e2";

			var oParams = {};

			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;

			} else {
				if (this.getOwnerComponent().getComponentData()) {
					var patternConvert = function(oParam) {
						if (Object.keys(oParam).length !== 0) {
							for (var prop in oParam) {
								if (prop !== "sourcePrototype") {
									return prop + "(" + oParam[prop][0] + ")";
								}
							}
						}
					};

					this.sContext = patternConvert(this.getOwnerComponent().getComponentData().startupParameters);

				}
			}

			var oPath;

			if (this.sContext) {
				oPath = {
					path: "/" + this.sContext,
					parameters: oParams
				};
				this.getView().bindObject(oPath);
			}

		},*/
		
			_getFilerOptinsDialog : function () {
       
        // helper function is instantiating the fragment by 
        // calling the sap.ui.xmlfragment method with the path to the fragment definition 
        //as an argument. The function returns the instantiated controls for further use in the app
       
        // create dialog lazily
            if (!this._oDialog) {
                // create dialog via fragment factory
            // we pass PlansOverviewPieChartController as parameter so the fragment can use it
            // i.e. this controller has handler functions for the fragment
               this._oDialog = sap.ui.xmlfragment("com.sap.build.standard.flexsoOpdrachtMockUpFinal.view.CreateProject", this);
               // connect dialog to view (models, lifecycle)
               this.getView().addDependent(this._oDialog);
               
            }
                        
            return this._oDialog;
         },
         
	/*	_onOverflowToolbarButtonPress: function() {

			var sDialogName = "CreateProject";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];

			if (!oDialog) {
				oDialog = new CreateProject(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}
			oDialog.open();

		},*/
		
		
		
			
	/*	doNavigate: function(sRouteName, oBindingContext, fnPromiseResolve, sViaRelation) {
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var sEntityNameSet;
			if (sPath !== null && sPath !== "") {
				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
				}
				sEntityNameSet = sPath.split("(")[0];
			}
			var sNavigationPropertyName;
			var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

			if (sEntityNameSet !== null) {
				sNavigationPropertyName = sViaRelation || this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(sEntityNameSet, sRouteName);
			}
			if (sNavigationPropertyName !== null && sNavigationPropertyName !== undefined) {
				if (sNavigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						context: sPath,
						masterContext: sMasterContext
					}, false);
				} else {
					oModel.createBindingContext(sNavigationPropertyName, oBindingContext, null, function(bindingContext) {
						if (bindingContext) {
							sPath = bindingContext.getPath();
							if (sPath.substring(0, 1) === "/") {
								sPath = sPath.substring(1);
							}
						} else {
							sPath = "undefined";
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							this.oRouter.navTo(sRouteName);
						} else {
							this.oRouter.navTo(sRouteName, {
								context: sPath,
								masterContext: sMasterContext
							}, false);
						}
					}.bind(this));
				}
			} else {
				this.oRouter.navTo(sRouteName);
			}

			if (typeof fnPromiseResolve === "function") {
				fnPromiseResolve();
			}

		},*/
		_onOverflowToolbarButtonPress1: function() {

			var sDialogName = "WerknemerCreate";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];

			if (!oDialog) {
				oDialog = new WerknemerCreate(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}
			oDialog.open();

		},
	/*	_onRowPress: function(oEvent) {
			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("ProjectDetail", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onRowPress1: function(oEvent) {
			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("WerknemerDetail", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});
			
		},
	*/
		onInit: function() {
			
		var oIconFilter = this.getView("ProjectenEnWerknemers").byId("add");
		var that = this;
    	oIconFilter.attachPress(function(oEvent) {
   
    	that._getFilerOptinsDialog().open();
   
    	});
		/*	this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("ProjectenEnWerknemers").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));*/
					var oViewModel,
					iOriginalBusyDelay,
					oTable = this.byId("table_emp");

				// Put down worklist table's original value for busy indicator delay,
				// so it can be restored later on. Busy handling on the table is
				// taken care of by the table itself.
				iOriginalBusyDelay = oTable.getBusyIndicatorDelay();
				// keeps the search state
				this._aTableSearchState = [];

				// Model used to manipulate control states
				oViewModel = new JSONModel({
					EmpTableTitle : this.getResourceBundle().getText("EmpTableTitle"),
					ProjTableTitle : this.getResourceBundle().getText("ProjTableTitle"),
					tableBusyDelay : 0
				});
				this.setModel(oViewModel, "worklistView");

				// Make sure, busy indication is showing immediately so there is no
				// break after the busy indication for loading the view's meta data is
				// ended (see promise 'oWhenMetadataIsLoaded' in AppController)
				oTable.attachEventOnce("updateFinished", function(){
					// Restore original busy indicator delay for worklist's table
					oViewModel.setProperty("/tableBusyDelay", iOriginalBusyDelay);
				});
		},
		
		onUpdateFinished : function (oEvent) {
				// update the worklist's object counter after the table update
				var sTitle,
					oTable = oEvent.getSource(),
					iTotalItems = oEvent.getParameter("total");
				// only update the counter if the length is final and
				// the table is not empty
				if (iTotalItems && oTable.getBinding("items").isLengthFinal()) {
					sTitle = this.getResourceBundle().getText("EmpTableTitleCount", [iTotalItems]);
			
				} else {
					sTitle = this.getResourceBundle().getText("EmpTableTitle");
		
				}
				this.getModel("worklistView").setProperty("/EmpTableTitle", sTitle);
			},
			
				onUpdateFinished1 : function (oEvent) {
				// update the worklist's object counter after the table update
				var sTitle,
					oTable = oEvent.getSource(),
					iTotalItems = oEvent.getParameter("total");
				// only update the counter if the length is final and
				// the table is not empty
				if (iTotalItems && oTable.getBinding("items").isLengthFinal()) {
					sTitle = this.getResourceBundle().getText("ProjTableTitleCount", [iTotalItems]);
				} else {
					sTitle = this.getResourceBundle().getText("ProjTableTitle");

				}
				this.getModel("worklistView").setProperty("/ProjTableTitle", sTitle);
			}
	});
}, /* bExport= */ true);
