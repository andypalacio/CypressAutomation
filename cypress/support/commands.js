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
const BASEURL = Cypress.env("BASEURL");

Cypress.Commands.add("login", () => {
  cy.visit(BASEURL);
  var USERNAME = Cypress.env("USERNAME");
  var PASSWORD = Cypress.env("PASSWORD");
  cy.get('.right > .form > [type="email"]').click().type(USERNAME);
  cy.get('.right > .form > [type="password"]').click().type(PASSWORD);
  cy.get(".Button").contains("Login").click();
});

Cypress.Commands.add("loginParams", (user, pass) => {
    if (user) {
        cy.get('.right > .form > [type="email"]').click().type(user);
      }
      if (pass) {
        cy.get('.right > .form > [type="password"]').click().type(pass);
      }
      cy.get(".right > .form > .Button").click();
  });

  Cypress.Commands.add("RemoveRecentlyCreatedCard", (cardName) => {
    cy.get('.Cards__card-name:contains("' + cardName + '")').click()
    cy.get('.isDanger').click()
    cy.get('.Cards__card-name:contains("' + cardName + '")').should('not.exist')
  });