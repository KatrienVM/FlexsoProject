function initModel() {
	var sUrl = "/SAPGateway/sap/opu/odata/SAP/YXM_089_MAE_PROJ_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}