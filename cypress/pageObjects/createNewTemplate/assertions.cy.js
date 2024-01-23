class createNewTemplateAssertions {
  checkThatTemplateCreatedSuccessfully(templateTitle) {
    cy.get("[data-testid='list-card']")
      .should("contain", "This card is a template.")
      .and("contain", templateTitle);
    return this;
  }
}

export default createNewTemplateAssertions;
