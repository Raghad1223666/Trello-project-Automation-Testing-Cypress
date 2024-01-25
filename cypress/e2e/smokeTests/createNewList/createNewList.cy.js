import {
  Before,
  Then,
  Given,
  When,
  After,
} from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils";
import createNewListActions from "../../../pageObjects/createNewList/actions.cy";
import createNewListAssertions from "../../../pageObjects/createNewList/assertions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";

let sharedAction = new sharedActions();
let sharedAssertion = new sharedAssertions();
let dataUtils = new SharedDataUtils();
let createNewListAction = new createNewListActions();
let createNewListAssertion = new createNewListAssertions();

let boardName = dataUtils.boardName();

Before(() => {
  sharedAction.visitUrl("https://trello.com/login").loginToTrello();
  cy.intercept({ url: "1/lists" }).as("listCreated");
  // Create Board
  dataUtils.createNewBoard(boardName).as("boardResponse");
});

Given("The user navigate to the board", () => {
  cy.wait("@login");
  cy.get("@boardResponse").then((response) => {
    sharedAction.visitUrl(response.body.url);
  });
  cy.screenshot({ capture: "fullPage" });
});

When("Click on the Add another list", () => {
  createNewListAction.clickOnAddAnotherList();
});

When("Enter list title", () => {
  sharedAction.typeListName("Raghad List");
});

When("Click on the Add list button", () => {
  createNewListAction.clickAddListButton();
});

Then("The list Added successfully", () => {
  createNewListAssertion.checkListIsVisible();
  sharedAssertion.checkListNameHasCorrectText("Raghad List");
});

After(() => {
  cy.wait("@listCreated");
  cy.get("@boardResponse").then((response) => {
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage();
    sharedAction.backToHomePage();
  });
});
