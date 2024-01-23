import {
  Before,
  Then,
  Given,
  When,
  After,
} from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils";
import hideTemplateFromListActions from "../../../pageObjects/hideTemplateFromList/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";

let sharedAction = new sharedActions();
let sharedAssertion = new sharedAssertions();
let dataUtils = new SharedDataUtils();
let hideTemplateFromListAction = new hideTemplateFromListActions();

let boardName = sharedAction.boardName();

Before(() => {
  sharedAction.visitUrl("https://trello.com/login").loginToTrello();
  // Create Board
  dataUtils.createNewBoard(boardName).as("boardResponse");
  // Get lists in Board
  cy.get("@boardResponse").then((response) => {
    dataUtils.getListsOnBoard(response.body.id).as("listsOnBoard");
  });
  // Create New Template
  cy.get("@listsOnBoard").then((response) => {
    dataUtils.createNewCard(response.body[0].id, "Raghad Template", true);
  });
});

Given("Go to the Board", () => {
  cy.wait("@login");
  cy.get("@boardResponse").then((response) => {
    sharedAction.visitUrl(response.body.url);
  });
});

When("Click on the Template card", () => {
  sharedAction.clickOnTheCard();
});

When("Click on the Hide from list button", () => {
  hideTemplateFromListAction.clickOnTheHideFromListButton();
});

When("Close Template popup", () => {
  sharedAction.closeTemplatePopup();
});

Then("The Template is hidden from the list successfully", () => {
  sharedAssertion.checkThatListNotContainCard("Raghad Template");
});

After(() => {
  cy.get("@boardResponse").then((response) => {
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage();
    sharedAction.backToHomePage();
  });
});
