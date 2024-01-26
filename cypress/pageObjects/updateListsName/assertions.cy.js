class updateListsNameAssertions {
  checkListsNameHasCorrectText(arrayOfExpectedNames) {
    for (let i = 0; i < arrayOfExpectedNames.length; i++) {
      cy.get("[data-testid='list-name']").eq(i).should("have.text", arrayOfExpectedNames[i]);
    }
    return this;
  }
}

export default updateListsNameAssertions;
