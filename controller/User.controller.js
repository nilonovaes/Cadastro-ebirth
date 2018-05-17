sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
],

function (Controller, History, JSONModel, jQuery, MessageToast) {
    "use strict";
    return Controller.extend("ModelUI5.controller.User", {

        onInit: function () {
            this.getOwnerComponent()
			.getRouter()
			.getRoute("User")
			.attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function(evt) {

            var oValue = evt.getParameter("arguments").value; 
			var oJson = new JSONModel();

			var birthdays = this.getView().getModel("birthdays").getData().Birthdays;

			for (var i = 0; i < birthdays.length; i++) {
				if (birthdays[i].name === oValue) {
                    var user = birthdays[i];
				}
			}
			oJson.setData(user);
			this.getView().setModel(oJson, "UserSelected");
        },

        onNavPress: function () {

            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Adm");
            }

        }
        // ,
        // handleUploadComplete: function (oEvent) {
        //     var sResponse = oEvent.getParameter("response");
        //     if (sResponse) {
        //         var sMsg = "";
        //         var m = /^\[(\d\d\d)\]:(.*)$/.exec(sResponse);
        //         if (m[1] == "200") {
        //             sMsg = "Return Code: " + m[1] + "\n" + m[2] + "(Upload Success)";
        //             oEvent.getSource().setValue("");
        //         } else {
        //             sMsg = "Return Code: " + m[1] + "\n" + m[2] + "(Upload Error)";
        //         }

        //         MessageToast.show(sMsg);
        //     }
        // },

        // handleUploadPress: function (oEvent) {
        //     var oFileUploader = this.byId("fileUploader");
        //     if (!oFileUploader.getValue()) {
        //         MessageToast.show("Choose a file first");
        //         return;
        //     }
        //     oFileUploader.upload();
        // },

        // handleTypeMissmatch: function (oEvent) {
        //     var aFileTypes = oEvent.getSource().getFileType();
        //     jQuery.each(aFileTypes, function (key, value) {
        //         aFileTypes[key] = "*." + value;
        //     });
        //     var sSupportedFileTypes = aFileTypes.join(", ");
        //     MessageToast.show("The file type *." + oEvent.getParameter("fileType") +
        //         " is not supported. Choose one of the following types: " +
        //         sSupportedFileTypes);
        // },

        // handleValueChange: function (oEvent) {
        //     MessageToast.show("Press 'Upload File' to upload file '" +
        //         oEvent.getParameter("newValue") + "'");
        // }

    });

});