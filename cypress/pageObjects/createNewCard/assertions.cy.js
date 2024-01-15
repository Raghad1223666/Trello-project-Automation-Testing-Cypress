class createNewCardAssertions {
  checkCardIsVisible(expectedText) {
    cy.get("[data-testid='list-cards'] li").eq(0).should("to.be.visible");
    cy.get("[data-testid='list-cards'] li").should("contain", expectedText);
    return this;
  }

  checkOpenedCardTitleIsCorrect(expectedText) {
    cy.get(".card-detail-title-assist").should("contain", expectedText);
    return this;
  }
}

export default createNewCardAssertions;
