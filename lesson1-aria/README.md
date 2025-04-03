# SAPUI5 Accessibility Example

## Overview

This SAPUI5 application demonstrates how to create accessible user interfaces by incorporating ARIA attributes and meaningful text alternatives for non-text content.

## Features

- **Accessible Images**: Images include `alt` attributes and ARIA properties like `ariaDetails` to ensure screen readers can convey equivalent information.
- **Accessible Buttons**: Buttons use `ariaLabelledBy` to associate them with descriptive text for screen readers.
- **Text Descriptions**: Invisible text elements provide additional context for non-text content, improving the user experience for visually impaired users.

## Hands-On Example

Below is an example of an accessible SAPUI5 view:

````xml
<mvc:View controllerName="lesson1.controller.Main" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:core="sap.ui.core">
  <Page id="accMainPage" title="Accessibility Example">
    <content>
      <!-- Accessible Image -->
      <Image id="accImage" src="./image/p78_QuickApply_Header.png" alt="Quick Apply Header" ariaDetails="accImageDescription" decorative="false"/>
      <core:InvisibleText id="accImageDescription" text="Header image for Quick Apply section" />

      <!-- Accessible Button -->
      <Button id="accButton" icon="sap-icon://edit" press="onPress" ariaLabelledBy="accButtonDescription"/>
      <core:InvisibleText id="accButtonDescription" text="Edit button for Quick Apply section" />
    </content>
  </Page>
</mvc:View>
````

### Download Resources

- [Download Quick Apply Header Image](./image/p78_QuickApply_Header.png)

### Explanation of Accessibility Features

1. **Accessible Image**:
   - The `alt` attribute provides a short description of the image for screen readers.
   - The `ariaDetails` property links the image to an `InvisibleText` element (`accImageDescription`) that provides a more detailed description.
   - The `decorative="false"` attribute ensures the image is not ignored by assistive technologies.

2. **Accessible Button**:
   - The `ariaLabelledBy` property links the button to an `InvisibleText` element (`accButtonDescription`) that describes its purpose.
   - This ensures that screen readers can convey the button's functionality to users.

3. **InvisibleText**:
   - The `core:InvisibleText` control is used to provide additional context for non-text elements.
   - These elements are not visible on the UI but are read by screen readers to improve accessibility.

## Testing Accessibility

1. Use tools like NVDA or JAWS to verify that:
   - The image description is read aloud by the screen reader.
   - The button's purpose is correctly conveyed.
2. Ensure that the `alt` text, `ariaDetails`, and `ariaLabelledBy` attributes are correctly interpreted by assistive technologies.

## Conclusion

By following this example, you can create accessible SAPUI5 applications that provide a better user experience for everyone, including users with disabilities.
