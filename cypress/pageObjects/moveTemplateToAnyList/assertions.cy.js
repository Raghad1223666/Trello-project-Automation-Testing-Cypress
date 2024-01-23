class moveTemplateToAnyListAssertions {
  checkThatDestinationListContainTemplate(templateTitle) {
    cy.get("[data-testid='list']").last().should("contain", templateTitle);
    return this;
  }
}

export default moveTemplateToAnyListAssertions;
