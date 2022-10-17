import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const BASEURL = Cypress.env("BASEURL");

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

When("I click on the {string} button on the login side", (btnlabel) => {
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
  cy.get(".Error").should("contain", error);
});

// describe("Login", () => {
//   const BASEURL = Cypress.env("BASEURL");

//   it.skip("Succesfuly logs in", () => {
//     cy.visit(BASEURL + "/home");
    
//   });

//   it("non existent user", () => {
//     cy.visit(BASEURL + "/home");
//     cy.loginParams("test@gmail.com", "123123");

//     cy.get(".Error").should(
//       "contain",
//       "There is no user registered with that email"
//     );
//   });

//   it("empty user", () => {
//     cy.visit(BASEURL + "/home");
//     cy.loginParams("", "123123");

//     cy.get(".Error").should("contain", "Please enter Email and Password");
//   });

//   it("empty Password", () => {
//     cy.visit(BASEURL + "/home");
//     cy.loginParams("andresepalacio+demo@gmail.com", "");

//     cy.get(".Error").should("contain", "Please enter Email and Password");
//   });

//   it("wrong password", () => {
//     cy.visit(BASEURL + "/home");
//     cy.loginParams("andresepalacio+demo@gmail.com", "test");

//     cy.get(".Error").should("contain", "Wrong password");
//   });
// });
