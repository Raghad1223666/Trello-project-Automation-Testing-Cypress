import {
  Given,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import createNewCardActions from "../../../pageObjects/createNewCard/actions.cy";
import createNewCardAssertions from "../../../pageObjects/createNewCard/assertions.cy";


let dataUtils = new SharedDataUtils();
let sharedAction = new sharedActions();
let createNewCardAction = new createNewCardActions();
let createNewCardAssertion = new createNewCardAssertions();

let boardName = sharedAction.boardName();

Before(() => {
  sharedAction.visitUrl("https://trello.com/login").loginToTrello();
  // Create Board
  dataUtils.createNewBoard(boardName).as("boardResponse");
});

Given("Go to the Board", () => {
  cy.wait("@login")
  cy.get("@boardResponse").then((response) => {
    sharedAction.visitUrl(response.body.url);
  });
});

When("Click on the Add a card", () => {
  createNewCardAction.clickOnTheAddCard();
});

When("Enter a title for this card to add new card", () => {
  createNewCardAction.typeTitleInCardTextarea("Card 1");
});

When("Click on the add card button", () => {
  createNewCardAction.clickOnAddCardButton();
});

Then("The Card is created successfully", () => {
  createNewCardAssertion.checkCardIsVisible();
  createNewCardAssertion.checkCardIsContainCorrectText("Card 1");
});

After(() => {
  cy.get("@boardResponse").then((response) => {
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage();
    sharedAction.back();
  });
});
