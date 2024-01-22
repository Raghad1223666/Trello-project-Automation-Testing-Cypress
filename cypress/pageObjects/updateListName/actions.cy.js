class updateListNameActions {
  clickOnListName() {
    cy.get("[data-testid='list-name']").first().click();
    return this;
  }

  typeNewListName(listName) {
    cy.get("[data-testid='list-name-textarea']").first().type(listName);
  }
}

export default updateListNameActions;
