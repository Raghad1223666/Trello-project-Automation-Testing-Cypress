import {
  Before,
  Then,
  Given,
  When,
  After,
} from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils";
import updateListNameActions from "../../../pageObjects/updateListName/actions.cy";
import updateListNameAssertions from "../../../pageObjects/updateListName/assertions.cy";

let sharedAction = new sharedActions();
let dataUtils = new SharedDataUtils();
let updateListNameAction = new updateListNameActions();
let updateListNameAssertion = new updateListNameAssertions();

let boardName = sharedAction.boardName();

Before(() => {
  sharedAction.visitUrl("https://trello.com/login").loginToTrello();
  // Create Board
  dataUtils.createNewBoard(boardName).as("boardResponse");
});

Given("Go to the Board", () => {
  cy.wait("@login");
  cy.get("@boardResponse").then((response) => {
    sharedAction.visitUrl(response.body.url);
  });
});

When("Click on the List name", () => {
  updateListNameAction.clickOnListName();
});

When("Type the new name", () => {
  updateListNameAction.typeNewListName("QA Testing{enter}");
});

Then("The List name is updated correctly", () => {
  updateListNameAssertion.checkListNameHasCorrectText("QA Testing");
});

After(() => {
  cy.get("@boardResponse").then((response) => {
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage();
    sharedAction.backToHomePage();
  });
});
