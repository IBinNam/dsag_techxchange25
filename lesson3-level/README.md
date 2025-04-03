# Lesson 3 - Level Example

This lesson focuses on demonstrating the importance of semantic HTML in SAP UI5 applications to enhance accessibility. It highlights how using proper heading elements (`<Title>` with levels like `H1`, `H2`, etc.) improves both the visual hierarchy and the experience for assistive technologies like screen readers.

## Hands-On Example

Below is an example of how to use semantic HTML elements in SAP UI5 to create an accessible page structure:

```xml
<mvc:View controllerName="lesson3.controller.Main"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m">
   <Page id="accMainPage" title="Accessibility Example">
        <content>
      <VBox>
        <Title text="Heading 1" level="H1"/>
        <Text text="This is some content under Heading 1." />
        <Title text="Heading 2" level="H2"/>
        <Text text="This is some content under Heading 2." />
      </VBox>
    </content>
    </Page>
</mvc:View>
```

### Explanation of Accessibility Points

1. **Semantic Headings with `<Title>`**:
   - The `<Title>` element is used to define headings with specific levels (`H1`, `H2`, etc.).
   - These levels create a clear visual hierarchy and help assistive technologies, such as screen readers, understand the structure of the content.

2. **Proper Heading Levels**:
   - The `level` attribute ensures that the headings are semantically correct. For example:
     - `level="H1"` is used for the main heading of the page.
     - `level="H2"` is used for subheadings.
   - This improves navigation for users relying on screen readers.

## Accessibility

This example emphasizes the critical role of semantic HTML elements, such as `<Title>`, in ensuring that assistive technologies can accurately interpret the page structure. Proper use of headings improves navigation for users relying on screen readers and other accessibility tools.
