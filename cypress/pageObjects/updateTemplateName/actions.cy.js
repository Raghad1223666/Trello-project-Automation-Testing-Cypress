class updateTemplateNameActions {
  clickOnTemplateCard() {
    cy.get("[data-testid='list-card']").click();
    return this;
  }

  typeNewTemplateName(templateName) {
    cy.get(".window-title textarea").type(templateName);
    return this;
  }


}

export default updateTemplateNameActions;
