class updateListsNameActions {
  typeListsName(arrayOfNames) {
    for (let i = 0; i < arrayOfNames.length; i++) {
      cy.get("[data-testid='list-name']").eq(i).click();
      cy.get("[data-testid='list-name-textarea']")
        .eq(i)
        .type(arrayOfNames[i]);
    }
  }
}

export default updateListsNameActions;
