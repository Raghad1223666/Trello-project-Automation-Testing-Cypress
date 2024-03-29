import {
  Before,
  Then,
  Given,
  When,
  After,
} from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils";
import updateTemplateNameActions from "../../../pageObjects/updateTemplateName/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";

let sharedAction = new sharedActions();
let sharedAssertion = new sharedAssertions();
let dataUtils = new SharedDataUtils();
let updateTemplateNameAction = new updateTemplateNameActions();

let boardName = dataUtils.boardName();

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
    dataUtils.createNewCard(response.body[0].id, "Raghad Template", true).as("cardResponse");
  });

  cy.get("@cardResponse").then((response) => {
    dataUtils.cardIntercept(response.body.id);
  });
  
});

Given("The user navigate to the board", () => {
  cy.wait("@login");
  cy.get("@boardResponse").then((response) => {
    sharedAction.visitUrl(response.body.url);
  });
});

When("Click on the Template card", () => {
  sharedAction.clickOnTheCard();
});

When("Type the new name from Template popup", () => {
  cy.wait("@cardOpen");
  updateTemplateNameAction.typeNewTemplateName("1{enter}");
});

When("Close Template popup", () => {
  sharedAction.closeTemplatePopup();
});

Then("The Template name is updated correctly", () => {
  sharedAssertion.checkTemplateContainExpectedText("Raghad Template1");
});

After(() => {
  cy.get("@boardResponse").then((response) => {
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage().backToHomePage();
  });
});
