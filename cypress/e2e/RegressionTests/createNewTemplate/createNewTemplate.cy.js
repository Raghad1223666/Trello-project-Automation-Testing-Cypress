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
import createNewTemplateAssertions from "../../../pageObjects/createNewTemplate/assertions.cy";

let dataUtils = new SharedDataUtils();
let sharedAction = new sharedActions();
let createNewTemplateAction = new createNewTemplateActions();
let createNewTemplateAssertion = new createNewTemplateAssertions();

let boardName = sharedAction.boardName();

Before(() => {
  sharedAction.visitUrl("https://trello.com/login").loginToTrello();
  // Create Board
  dataUtils.createNewBoard(boardName).as("boardResponse");
});

Given("Go the the board", () => {
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
  createNewTemplateAssertion.checkThatTemplateCreatedSuccessfully(
    "Card Template"
  );
});

After(() => {
  createNewTemplateAction.closeTemplate();
  cy.get("@boardResponse").then((response) => {
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage();
    sharedAction.backToHomePage();
  });
});
