import {
  Given,
  When,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import { EMAIL, PASSWORD } from "../../../support/Constants";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils";

const radomNumber = Math.floor(Math.random() * 100);
let boardName = `Raghad${radomNumber}`;
let dataUtils = new SharedDataUtils();

Before(() => {
  cy.visit("https://trello.com/login");
  cy.loginToTrello(EMAIL, PASSWORD);

  // Create Board
  dataUtils.createNewBoard(boardName).as("boardResponse");
  cy.get("@boardResponse");
});

Given("The user Navigate to Trello app", () => {});

Given("Go to the Board", () => {});

When("Click on the Add a card", () => {});

When("Enter a title for this card to add new card", () => {});

When("Click on the add card button", () => {});

Then("The user Card created successfully", () => {});

After(() => {
  cy.wait(5000);
  cy.get("@boardResponse").then((response) => {
    cy.visit(response.body.url);
    cy.wait(5000);
    dataUtils.deleteCreatedBoard(response.body.id);
    cy.reload();
  });
});
