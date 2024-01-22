class deleteExistingCardAssertions {
  checkThatListNotContainDeletedCard(cardName) {
    cy.get("[data-testid='list-cards']").first().should("be.empty");
    cy.get("[data-testid='list-cards']").should("not.contain", cardName);
  }
}

export default deleteExistingCardAssertions;
