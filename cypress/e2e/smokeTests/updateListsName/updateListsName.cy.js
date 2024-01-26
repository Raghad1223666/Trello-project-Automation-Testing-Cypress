import {
  Before,
  Then,
  Given,
  When,
  After,
} from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils";
import updateListsNameActions from "../../../pageObjects/updateListsName/actions.cy";
import updateListsNameAssertions from "../../../pageObjects/updateListsName/assertions.cy";

let sharedAction = new sharedActions();
let dataUtils = new SharedDataUtils();
let updateListsNameAction = new updateListsNameActions();
let updateListsNameAssertion = new updateListsNameAssertions();

let boardName = dataUtils.boardName();

Before(() => {
  sharedAction.visitUrl("https://trello.com/login").loginToTrello();
  // Create Board
  dataUtils.createNewBoard(boardName).as("boardResponse");
});

Given("The user navigate to the board", () => {
  cy.wait("@login");
  cy.get("@boardResponse").then((response) => {
    sharedAction.visitUrl(response.body.url);
  });
});

When("Click on the lists name and Type the new name", () => {
  updateListsNameAction.typeListsName(["New{enter}", "In Progress{enter}", "Ready{enter}"]);
});

Then("The Lists name is updated correctly", () => {
  updateListsNameAssertion.checkListsNameHasCorrectText(["New", "In Progress", "Ready"]);
});

After(() => {
  cy.get("@boardResponse").then((response) => {
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage();
    sharedAction.backToHomePage();
  });
});
