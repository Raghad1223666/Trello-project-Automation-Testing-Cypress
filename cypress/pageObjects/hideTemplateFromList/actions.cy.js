class hideTemplateFromListActions {
  clickOnTheHideFromListButton() {
    cy.contains("Hide from list").click();
    return this;
  }
}

export default hideTemplateFromListActions;
