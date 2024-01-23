class sharedAssertions {
  checkListNameHasCorrectText(expectedText) {
    cy.get("[data-testid='list-name']")
      .last()
      .should("have.text", expectedText);
    return this;
  }

  checkThatListNotContainCard(cardName) {
    cy.get("[data-testid='list-cards']").first().should("be.empty");
    cy.get("[data-testid='list-cards']").should("not.contain", cardName);
  }
}

export default sharedAssertions;
