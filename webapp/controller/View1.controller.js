sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("selFragment.selectDialog.controller.View1", {
		onValuehelp : function (oEvent) {
			var id = oEvent.getParameters().id.split('--')[2];
			var oDialog=  new sap.ui.xmlfragment("selFragment.selectDialog.fragments.selectDialog",this);
			this.getView().addDependent(oDialog);
			if(id == "input1"){
				oDialog.bindAggregation("items",{
				path : "city>/city",
				template : new sap.m.StandardListItem({
					title : "{city>cityName}"
				})
			});	
			}else
			{
			 oDialog.bindAggregation("items",{
				path : "country>/Country",
				template : new sap.m.StandardListItem({
					title : "{country>countryName}"
				})
			});	
			}
			
			//change1
			oDialog.open();
		}
	});
});