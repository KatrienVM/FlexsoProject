function initModel() {
	var sUrl = "/SAPGateway/sap/opu/odata/sap/YXM_110_MEA_EMP_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}