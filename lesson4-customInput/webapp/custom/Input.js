sap.ui.define([
    "sap/m/Input"
], function (Control, Utils) {
    "use strict";

    return Control.extend("lesson4.custom.Input", {

        _fireUpdateFinished: function () {
            if (Control.prototype._fireUpdateFinished) {
                Control.prototype._fireUpdateFinished.apply(this, arguments);
            }

            this._updateInput();
        },

        onAfterRendering: function () {
            if (Control.prototype.onAfterRendering) {
                Control.prototype.onAfterRendering.apply(this, arguments);
            }

            this._updateInput();
        },

        _updateInput: function () {
            var cont = $('#' + this.sId);
            var inpt = cont.find('input:first');

            //If the showSuggestion property is set to true, we set the autocomplete attribute to on
            if (this.getProperty("showSuggestion")) {
                inpt.attr("autocomplete", "on")
            }
        },
        renderer: function (oRm, oControl) {
            sap.m.InputRenderer.render(oRm, oControl);

        }
    });
});