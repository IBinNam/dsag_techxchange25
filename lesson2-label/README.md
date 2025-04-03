# Lesson 2 - Label Example

This project demonstrates the use of `ariaLabelFor` in SAP UI5 applications to improve accessibility. It includes a simple UI5 application showcasing how to bind labels to input fields for better screen reader support.

## Hands-On Example

Below is an example of an XML view demonstrating accessibility features:

```xml
<mvc:View controllerName="lesson2.controller.Main"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m">
   <Page id="accMainPage" title="Accessibility Example">
        <content>
            <!-- Label bound to an input field -->
            <Label id="accLabel" text="Name" labelFor="accInput" />
            <Input id="accInput" placeholder="Enter your name" />

            <!-- Group of radio buttons with a warning state -->
            <VBox class="sapUiSmallMarginTop">
                <Label id="accLabelRadioButtonGroup" text="An example of a group in warning state" labelFor="rbg4" />
                <RadioButtonGroup id="rbg4" valueState="Warning">
                    <RadioButton id="RB4-1" text="Option 1" />
                    <RadioButton id="RB4-2" text="Option 2" />           
                </RadioButtonGroup>
             </VBox>
        </content>
    </Page>
</mvc:View>
```

### Accessibility Features Explained

1. **Label and Input Binding**:
   - The `<Label>` element with `labelFor` attribute binds to the `<Input>` field using its `id`. This ensures that screen readers announce the label text ("Name") when the input field is focused.

2. **Placeholder Text**:
   - The `placeholder` attribute in the `<Input>` field provides additional guidance to users by displaying "Enter your name" when the field is empty.

3. **Radio Button Group**:
   - The `<Label>` element with `labelFor` attribute binds to the `<RadioButtonGroup>` using its `id`. This ensures that screen readers announce the label text ("An example of a group in warning state") when the group is focused.

By following these practices, you can create accessible SAP UI5 applications that are inclusive for all users.
