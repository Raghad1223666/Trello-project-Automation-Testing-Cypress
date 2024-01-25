import {
  Given,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import createNewTemplateActions from "../../../pageObjects/createNewTemplate/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";

let dataUtils = new SharedDataUtils();
let sharedAction = new sharedActions();
let sharedAssertion = new sharedAssertions();
let createNewTemplateAction = new createNewTemplateActions();

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

When("Click on the create a template icon", () => {
  createNewTemplateAction.clickOnCreateTemplateIcon();
});

When("Click on the Create a new template button", () => {
  createNewTemplateAction.clickOnCreateTemplateButton();
});

When("Type Template title", () => {
  createNewTemplateAction.typeTemplateTitle("Card Template");
});

When("Click on the Add Button", () => {
  createNewTemplateAction.clickOnAddButton();
});

Then("The Template created successfully", () => {
  sharedAssertion.checkTemplateContainExpectedText("Card Template");
});

After(() => {
  sharedAction.closeTemplatePopup();
  cy.get("@boardResponse").then((response) => {
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage();
    sharedAction.backToHomePage();
  });
});
