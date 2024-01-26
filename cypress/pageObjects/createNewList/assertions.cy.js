class createNewListAssertions {
  checkListNameHasCorrectText(expectedText) {
    cy.get("[data-testid='list-name']")
      .last()
      .should("have.text", expectedText);
    return this;
  }

  checkListIsVisible() {
    cy.get("ol[data-testid='lists'] > li").should("have.length", "4");
    cy.get("[data-testid='lists'] > li").last().should("be.visible");
    return this;
  }
}

export default createNewListAssertions;
