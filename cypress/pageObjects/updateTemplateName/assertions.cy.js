class updateTemplateNameAssertions {
  templateContainExpectedText(expectedName) {
    cy.get("[data-testid='list-card']").should("contain", expectedName);
    return this;
  }
}

export default updateTemplateNameAssertions;
