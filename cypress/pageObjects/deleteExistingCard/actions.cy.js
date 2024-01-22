class deleteExistingCardActions {
  openExistingCard() {
    cy.get("@cardResponse").then((response) => {
      cy.get(`[data-card-id='${response.body.id}']`).click();
    });
    return this;
  }

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
