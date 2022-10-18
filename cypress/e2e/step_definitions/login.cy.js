import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const BASEURL = Cypress.env("BASEURL");
const t60 = { timeout: 60000 };

Given("I navigate to {string}", function (string) {
  cy.visit(BASEURL + string);
});  

When("I enter {string} as user and {string} as password the login side", function (user, pass) {
  if (user) {
    cy.get('.right > .form > [type="email"]').click().type(user);
  }
  if (pass) {
    cy.get('.right > .form > [type="password"]').click().type(pass);
  }
});

When("I click on the {string} button", (btnlabel) => {
  cy.get(".Button").contains(btnlabel).click();
});

Then("I am successfully logged in", function () {
  cy.url().should("include", "/guests");
  cy.get('.SubHeader__title').contains("Guests");
});

Given("I am logged in to the app",  function () {
  cy.login();
});

Then("logged out from the app", function () {
  return pending;
});

Then("The error message {string} is displayed", function (error) {
  cy.get(".Error", t60).should("contain", error);
});