class sharedAssertions {
  checkListNameHasCorrectText(expectedText) {
    cy.get("[data-testid='list-name']")
      .last()
      .should("have.text", expectedText);
    return this;
  }
}

export default sharedAssertions;
