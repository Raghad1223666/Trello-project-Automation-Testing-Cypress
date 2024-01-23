class hideTemplateFromListAssertions {
  checkThatTemplateHiddenFromList(templateName) {
    cy.get("[data-testid='list-cards']").should("not.contain", templateName);
    return this;
  }
}

export default hideTemplateFromListAssertions;
