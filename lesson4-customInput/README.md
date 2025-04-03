# Lesson 4 - Custom Input

This lesson demonstrates how to create a custom SAP UI5 control for an input field with `autocomplete="on"`. The custom control ensures that browsers and assistive technologies do not offer autocomplete suggestions, improving accessibility for users with cognitive disabilities.

## Hands-On Example

### Step 1: Define the Custom Control

The custom control extends the `sap.m.Input` control and overrides its behavior to set the `autocomplete` attribute dynamically based on the `showSuggestion` property.

```javascript
sap.ui.define([
    "sap/m/Input"
], function (Control) {
    "use strict";

    return Control.extend("lesson3.custom.Input", {

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

            // If the showSuggestion property is set to true, we set the autocomplete attribute to "on"
            if (this.getProperty("showSuggestion")) {
                inpt.attr("autocomplete", "on");
            }
        },
        renderer: function (oRm, oControl) {
            sap.m.InputRenderer.render(oRm, oControl);
        }
    });
});
```

### Step 2: Use the Custom Control in a View

Below is an example of how to use the custom control in an XML view. The `showSuggestion` property is set to `true`, enabling the `autocomplete` attribute.

```xml
<mvc:View controllerName="lesson3.controller.Main"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    xmlns:cc="lesson3.custom">
   <Page id="accMainPageResult" title="Accessibility Example">
        <content>
            <VBox>
                <Label id="accLabelResult" text="Name" labelFor="accInputResult"/>
                <cc:Input id="accInputResult" showSuggestion="true" placeholder="Enter your name"/>
            </VBox>
        </content>
    </Page>
</mvc:View>
```

### Accessibility Points

1. **Autocomplete Attribute**:
   - The `autocomplete` attribute is dynamically set to `"on"` when `showSuggestion` is `true`. This ensures that browsers provide autocomplete suggestions when appropriate.

2. **Label Association**:
   - The `Label` control is associated with the input field using the `labelFor` property. This improves accessibility by allowing screen readers to announce the label when the input field gains focus.

3. **Placeholder Text**:
   - The `placeholder` property provides a hint to users about the expected input. This is particularly helpful for users with cognitive disabilities.

By following this example, you can create accessible and user-friendly input fields in your SAP UI5 applications.
