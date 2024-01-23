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

let sharedAction = new sharedActions();
let dataUtils = new SharedDataUtils();
let createNewListAction = new createNewListActions();
let createNewListAssertion = new createNewListAssertions();

let boardName = sharedAction.boardName();

Before(() => {
  sharedAction.visitUrl("https://trello.com/login").loginToTrello();
  cy.intercept({ url: "1/lists" }).as("listCreated");
  // Create Board
  dataUtils.createNewBoard(boardName).as("boardResponse");
});

Given("Go to the Board", () => {
  cy.wait("@login");
  cy.get("@boardResponse").then((response) => {
    sharedAction.visitUrl(response.body.url);
  });
});

When("Click on the Add another list", () => {
  createNewListAction.clickOnAddAnotherList();
});

When("Enter list title", () => {
  createNewListAction.typeListName("Raghad List");
});

When("Click on the Add list button", () => {
  createNewListAction.clickAddListButton();
});

Then("The list Added successfully", () => {
  createNewListAssertion.checkListIsVisible();
  createNewListAssertion.checkListIsContainCorrectText("Raghad List");
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
