class createNewCardAssertions {
  checkCardIsVisible() {
    cy.get("[data-testid='list-cards'] li").eq(0).should("to.be.visible");
    return this;
  }

  checkCardIsContainCorrectText(expectedText) {
    cy.get("[data-testid='list-cards'] li").should("contain", expectedText);
    return this;
  }
}

export default createNewCardAssertions;
