class sharedActions {
  waitSeconds(Seconds) {
    cy.wait(Seconds);
    return this;
  }

  visitUrl(url) {
    cy.visit(url);
    return this;
  }

  loginToTrello() {
    cy.fixture("data.json").then((data) => {
      cy.loginToTrello(data.email, data.password);
    });
    return this;
  }

  reloadPage() {
    cy.reload();
    return this;
  }

  backToHomePage() {
    cy.get("[aria-label='Back to home']").click();
  }

  closeTemplatePopup() {
    cy.get("[aria-label='Close dialog']").click();
    return this;
  }

  clickOnTheCard() {
    cy.get("[data-testid='list-card']").click();
    return this;
  }

}

export default sharedActions;
