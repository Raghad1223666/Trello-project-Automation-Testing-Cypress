class deleteExistingCardActions {

  clickArchiveButton() {
    cy.get("a[title='Archive']").click();
    return this;
  }

  clickDeleteButton() {
    cy.get("a[title='Delete']").click();
    return this;
  }

  clickDeleteButtonFromConfirmationPopup() {
    cy.get("input[value='Delete']").click();
    return this;
  }
}

export default deleteExistingCardActions;
