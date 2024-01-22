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
}

export default sharedActions;
