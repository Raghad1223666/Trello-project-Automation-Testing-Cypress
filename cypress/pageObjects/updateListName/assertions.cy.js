class updateListNameAssertions {
  checkListNameHasCorrectText(expectedText) {
    cy.get("[data-testid='list-name']")
      .first()
      .should("have.text", expectedText);
    return this;
  }
}

export default updateListNameAssertions;
