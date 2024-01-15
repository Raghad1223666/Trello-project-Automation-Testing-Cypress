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

const radomNumber = Math.floor(Math.random() * 100);
let boardName = `Raghad Board No.${radomNumber}`;
let dataUtils = new SharedDataUtils();
let sharedAction = new sharedActions();
let createNewCardAction = new createNewCardActions();
let createNewCardAssertion = new createNewCardAssertions();

Before(() => {
  sharedAction.visitUrl("https://trello.com/login").loginToTrello();
  // Create Board
  dataUtils.createNewBoard(boardName).as("boardResponse");
});

Given("Go to the Board", () => {
  sharedAction.waitSeconds(2000);
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

Then("The Card is Visible and created", () => {
  createNewCardAssertion.checkCardIsVisible("Card 1");
});

When("Open the created card", () => {
  sharedAction.waitSeconds(2000);
  createNewCardAction.openCreatedCard();
});

Then(
  "The card was opened successfully and contains the expected text which means the card was created successfully",
  () => {
    sharedAction.waitSeconds(2000);
    createNewCardAssertion.checkOpenedCardTitleIsCorrect("Card 1");
  }
);

After(() => {
  cy.get("@boardResponse").then((response) => {
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage();
  });
});
