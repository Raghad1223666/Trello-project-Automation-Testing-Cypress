class createNewListActions {
  clickOnAddAnotherList() {
    cy.get("[data-testid='list-composer-button']").click();
    return this;
  }

  typeListName(listName) {
    cy.get("[data-testid='list-name-textarea']").last().type(listName);
  }

  clickAddListButton() {
    cy.get("[data-testid='list-composer-add-list-button']").click();
    return this;
  }
}

export default createNewListActions;
