// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginToTrello", (email, password) => {
  cy.intercept({url: "/1/resources/templates/categories"}).as("login");
  cy.get("#user").type(email);
  cy.get("#login").click();
  cy.origin(
    "https://id.atlassian.com",
    { args: { password } },
    ({ password }) => {
      cy.get("#password").type(password);
      cy.get("#login-submit").click();
    }
  );

});
