class createNewCardActions {
  clickOnTheAddCard() {
    cy.get("[data-testid='list']")
      .eq(0)
      .find("[data-testid='list-add-card-button']")
      .click();
    return this;
  }

  typeTitleInCardTextarea(title) {
    cy.get("[data-testid='list-card-composer-textarea']").type(title);
    return this;
  }

  clickOnAddCardButton() {
    cy.get("[data-testid='list-card-composer-add-card-button']").click();
    return this;
  }

  openCreatedCard() {
    cy.get("[data-testid='list-cards'] li").eq(0).click();
    return this;
  }
}

export default createNewCardActions;
