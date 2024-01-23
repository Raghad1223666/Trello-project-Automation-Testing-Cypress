class moveTemplateToAnyListActions {
  clickOnTheMoveLabel() {
    cy.get("[title='Move']").click();
    return this;
  }

  clickOnTheListLabel() {
    cy.contains("span", "List").parent().click();
    return this;
  }

  selectTheDestinationList(listTitle) {
    cy.get("[data-testid='move-card-popover-select-list-destination']").select(
      listTitle
    );
    return this;
  }

  clickOnTheMoveButton() {
    cy.get("[data-testid='move-card-popover-move-button']").click();
    return this;
  }
}

export default moveTemplateToAnyListActions;
