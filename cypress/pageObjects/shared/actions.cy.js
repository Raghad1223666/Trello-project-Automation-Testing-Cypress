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

  boardName() {
    const radomNumber = Math.floor(Math.random() * 100);
    return `Board No.${radomNumber}`;
  }

  backToHomePage(){
    cy.get("[aria-label='Back to home']").click();
  }

  closeTemplatePopup() {
    cy.get("[aria-label='Close dialog']").click();
    return this;
  }

  clickOnTemplateCard() {
    cy.get("[data-testid='list-card']").click();
    return this;
  }
}

export default sharedActions;
