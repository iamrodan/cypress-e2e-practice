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

//Caching session when login via page visit

Cypress.Commands.add("login", (username: string, password: string) => {
  const siteUrl = "https://www.demoblaze.com";
  cy.visit(siteUrl);
  cy.get("#login2").click();
  cy.get("#loginusername").should("be.visible").focus().type(username);
  cy.get("#loginpassword").should("be.visible").focus().type(password);
  cy.get("button").contains("Log in").click();
});
