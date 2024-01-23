class updateTemplateNameActions {
  typeNewTemplateName(templateName) {
    cy.get(".window-title textarea").type(templateName);
    return this;
  }
}

export default updateTemplateNameActions;
