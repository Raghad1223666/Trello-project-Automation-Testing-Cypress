import {
  Before,
  Then,
  Given,
  When,
  After,
} from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils";
import moveTemplateToAnyListActions from "../../../pageObjects/moveTemplateToAnyList/actions.cy";
import moveTemplateToAnyListAssertions from "../../../pageObjects/moveTemplateToAnyList/assertions.cy";

let sharedAction = new sharedActions();
let dataUtils = new SharedDataUtils();
let moveTemplateToAnyListAction = new moveTemplateToAnyListActions();
let moveTemplateToAnyListAssertion = new moveTemplateToAnyListAssertions();

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
    cy.log(response.body);
    dataUtils.cardIntercept(response.body.id);
  });
});

Given("Go to the Board", () => {
  cy.wait("@login");
  cy.get("@boardResponse").then((response) => {
    sharedAction.visitUrl(response.body.url);
  });
});

When("Click on the Template", () => {
  sharedAction.clickOnTheCard();
});

When("Click on the Move Label", () => {
  cy.wait("@cardOpen");
  moveTemplateToAnyListAction.clickOnTheMoveLabel();
});

When("Click on the List Label", () => {
  moveTemplateToAnyListAction.clickOnTheListLabel();
});

When("Select the destination List", () => {
  moveTemplateToAnyListAction.selectTheDestinationList("Done");
});

When("Click on the Move Button", () => {
  moveTemplateToAnyListAction.clickOnTheMoveButton();
});

When("Close the Template popup", () => {
  sharedAction.closeTemplatePopup();
});

Then("The Template is Moved to new list successfully", () => {
  moveTemplateToAnyListAssertion.checkThatDestinationListContainTemplate(
    "Raghad Template"
  );
});

After(() => {
  cy.get("@boardResponse").then((response) => {
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage();
    sharedAction.backToHomePage();
  });
});
