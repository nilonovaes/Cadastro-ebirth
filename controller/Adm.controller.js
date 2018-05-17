sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],

    function (Controller, JSONModel) {
        "use strict";
        return Controller.extend("ModelUI5.controller.Adm", {

            onPress: function (evt) {
                var oColumnListItem = evt.getSource();
                this.getOwnerComponent().getRouter().navTo("User", {
                    value: oColumnListItem.getCells()[0].getBinding("title").oValue
                });
            },

            addRow: function (evt) {
                // var oColumnListItem = evt.getSource();
                this.getOwnerComponent().getRouter().navTo("User", {
                    value: " "
                    // value: oColumnListItem.getCells()[0].getBinding("title").oValue
                });
            },

            onNavPress: function () {}

        });

    });