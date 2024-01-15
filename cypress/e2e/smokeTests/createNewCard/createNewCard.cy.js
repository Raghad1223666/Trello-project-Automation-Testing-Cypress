import {
  Given,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils";
import sharedActions from "../../../pageObjects/shared/actions.cy";

const radomNumber = Math.floor(Math.random() * 100);
let boardName = `Raghad${radomNumber}`;
let dataUtils = new SharedDataUtils();
let sharedAction = new sharedActions();

Before(() => {
  sharedAction.visitUrl("https://trello.com/login").loginToTrello();
  // Create Board
  dataUtils.createNewBoard(boardName).as("boardResponse");
});

Given("Go to the Board", () => {
    cy.get("@boardResponse").then((response) => {
        sharedAction.visitUrl(response.body.url);
      });
});

When("Click on the Add a card", () => {});

When("Enter a title for this card to add new card", () => {});

When("Click on the add card button", () => {});

Then("The user Card created successfully", () => {});

After(() => {
  sharedAction.waitSeconds(5000);
  cy.get("@boardResponse").then((response) => {
    cy.log(response.statusText)
    //Delete Board
    dataUtils.deleteCreatedBoard(response.body.id);
    sharedAction.reloadPage();
  });
});
