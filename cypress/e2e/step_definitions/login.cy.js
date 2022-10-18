import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const BASEURL = Cypress.env("BASEURL");
const t60 = { timeout: 60000 };

When("I enter {string} as user and {string} as password the login side", (user, pass) => {
    if (user) {
      cy.get('.right > .form > [type="email"]').click().type(user);
    }
    if (pass) {
      cy.get('.right > .form > [type="password"]').click().type(pass);
    }
  }
);

When("I click on the {string} button", (btnlabel) => {
  cy.get(".Button").contains(btnlabel).click();
});

Then("I am successfully logged in", () => {
  cy.url().should("include", "/guests");
  cy.get(".SubHeader__title").contains("Guests");
});

Given("I am logged in to the app", () => {
  cy.login();
});

Then("logged out from the app", () => {
  cy.visit(BASEURL);
  cy.get('.right > .form > h2').contains('Log In as a Hostel').should('be.visible')
});

Then("The error message {string} is displayed", (error) => {
  cy.get(".Error", t60).should("contain", error);
});
