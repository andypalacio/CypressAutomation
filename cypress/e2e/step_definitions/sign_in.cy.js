import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I enter {string} on the {string} field on the Sign in section", (value, field) => {
  if (value) {
    cy.get('.left > .form > [Placeholder="' + field + '"]')
      .click()
      .type(value);
  }
});

When("I click on the {string} link", (link) => {
  cy.get('[href="https://getlobee.com/' + link + '"]')
    .invoke("removeAttr", "target")
    .click();
});

Then("The page {string} is displayed with the title {string}", (page, title) => {
  cy.url().should("include", page);
  cy.get('body').contains(title)
});

Given("The account {string} is created", (hostelName) => {
  cy.url().should("include", "/guests");
  cy.get(".SubHeader__title").contains("Guests");
  cy.get(".--options").click();
  cy.get('[href="/settings"]').should("be.visible").click();
  cy.url().should("include", "/settings");
  cy.get('[placeholder="Hostel name"]').contains(hostelName).should("exist");
});
