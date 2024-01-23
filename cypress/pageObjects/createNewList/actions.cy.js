class createNewListActions {
  clickOnAddAnotherList() {
    cy.get("[data-testid='list-composer-button']").click();
    return this;
  }

  clickAddListButton() {
    cy.get("[data-testid='list-composer-add-list-button']").click();
    return this;
  }
}

export default createNewListActions;
