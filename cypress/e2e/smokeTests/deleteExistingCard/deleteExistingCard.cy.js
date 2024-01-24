import {
  Before,
  Then,
  Given,
  When,
  After,
} from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils";
import deleteExistingCardActions from "../../../pageObjects/deleteExistingCard/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";

let sharedAction = new sharedActions();
let dataUtils = new SharedDataUtils();
let sharedAssertion = new sharedAssertions();
let deleteExistingCardAction = new deleteExistingCardActions();

let boardName = dataUtils.boardName();

Before(() => {
  sharedAction.visitUrl("https://trello.com/login").loginToTrello();
  // Create Board
  dataUtils.createNewBoard(boardName).as("boardResponse");
  // Get Lists on the Board
  cy.get("@boardResponse").then((response) => {
    dataUtils.getListsOnBoard(response.body.id).as("listsOnBoardResponse");
  });
  // Create New Card
  cy.get("@listsOnBoardResponse").then((response) => {
    dataUtils.createNewCard(response.body[0].id, "Raghad Card").as("cardResponse");
  });

  cy.get("@cardResponse").then((response) => {
    dataUtils.cardIntercept(response.body.id);
  });
});

Given("Go to the Board", () => {
  cy.wait("@login");
  cy.get("@boardResponse").then((response) => {
    sharedAction.visitUrl(response.body.url);
  });
});

When("Open the existing card", () => {
  sharedAction.clickOnTheCard();
});

When("Click on the Archive Button", () => {
  cy.wait("@cardOpen");
  deleteExistingCardAction.clickArchiveButton();
});

When("Click on the Delete Button", () => {
  deleteExistingCardAction.clickDeleteButton();
});

When("Click on the Delete Button from confirmation popup", () => {
  deleteExistingCardAction.clickDeleteButtonFromConfirmationPopup();
});

Then("The card deleted successfully", () => {
  sharedAssertion.checkThatListNotContainCard("Raghad Card");
});

After(() => {
  cy.get("@boardResponse").then((response) => {
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage();
    sharedAction.backToHomePage();
  });
});
