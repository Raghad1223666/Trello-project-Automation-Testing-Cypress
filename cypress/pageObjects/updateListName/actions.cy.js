class updateListNameActions {
  clickOnListName() {
    cy.get("[data-testid='list-name']").last().click();
    return this;
  }
}

export default updateListNameActions;
