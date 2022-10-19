import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const today = new Date()
const tomorrow = new Date(today)
const dayAfterTmr = new Date(today)
tomorrow.setDate(today.getDate() + 1)
dayAfterTmr.setDate(today.getDate() + 2)
var tmr = tomorrow.toLocaleDateString().split("/")[0];
var datmr = dayAfterTmr.toLocaleDateString().split("/")[0] 

Given("I navigate to {string}", (string) => {
  cy.visit(BASEURL + string);
});

When("I click on the {string} header item", (tabname) => {
  cy.wait(4000)
  cy.get(".item").contains(tabname).should("be.visible").click();
});

When("I click on the more options header item", () => {
  cy.wait(4000)
  cy.get('.--options').should("be.visible").click();
});


When("I click on the Add New button of the cards collumn {string}", (columnTitle) => {
  cy.get('.Cards__cards-wrapper:contains("' + columnTitle + '") > .Button').click()
  cy.get('.Modal__title').contains("Creating Card").should('be.visible')
});

When("I click on the Add New button of the cards collumn Event cards", () => {
  cy.get('.Cards__cards-wrapper:contains("Event cards") > .Button').click()
  cy.get('.Modal__title').contains("Creating Card").should('be.visible')
});

When("I enter {string} on the {string} field of the card modal", (value, field) => {
  cy.get('[placeholder="' + field + '"]').click().type(value)
  if (field == "Name") {
    cardTitle = field
  }
});

When("I click on the Save buton of the card modal", () => {
  cy.get('.CardModal__buttons > .Button').click()
});

Then("the card {string} is displayed on the {string} column", (cardTitle, columnTitle) => {
  cy.get('.Cards__cards-wrapper:contains("' + columnTitle + '") > .Cards__card').contains(cardTitle).should('be.visible')
  cy.RemoveRecentlyCreatedCard(cardTitle)
});

Then("the card {string} is displayed on the Event cards column", (cardTitle) => {
  cy.get('.Cards__cards-wrapper:contains("Event cards") > .Cards__card').contains(cardTitle).should('be.visible')
  cy.RemoveRecentlyCreatedCard(cardTitle)
});

When("I enter a date as {string} day", (field) => {
  if (field == "Start"){
    cy.get('.DateColumn__day:contains("' + field + '") > input').click().get('.react-calendar__month-view__days > [type="button"]:contains("' + tmr + '")', { force: true }).click()
  }
  if (field == "End"){
    cy.get('.DateColumn__day:contains("' + field + '") > input').click().get('.react-calendar__month-view__days > [type="button"]:contains("' + datmr + '")', { force: true }).click()
  }
});

Then("I am redirected to {string}", (site) => {
  cy.url().should("include", site);
});