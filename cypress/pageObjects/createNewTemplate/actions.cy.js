class createNewTemplateActions {
  clickOnCreateTemplateIcon() {
    cy.get("[data-testid='card-template-list-button']").first().click();
    return this;
  }

  clickOnCreateTemplateButton() {
    cy.get("[data-testid='create-new-template-card-button']").click();
    return this;
  }

  typeTemplateTitle(templateTitle) {
    cy.get("[data-testid='create-template-card-composer']").type(templateTitle);
    return this;
  }

  clickOnAddButton() {
    cy.get("[data-testid='new-template-card-submit-button']").click();
    return this;
  }

  closeTemplate() {
    cy.get("[aria-label='Close dialog']").click();
  }
}

export default createNewTemplateActions;
