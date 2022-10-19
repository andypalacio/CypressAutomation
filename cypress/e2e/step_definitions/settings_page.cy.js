import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-file-upload";


When("I click on the {string} option", (itemName) => {
  cy.get("[href]").contains(itemName).click();
});

Given("I enter {string} on the {string} field", function (value, field) {
  cy.get('[placeholder="' + field + '"]')
    .click()
    .clear()
    .type(value);
});

Given("the value {string}, on the field {string} is saved", function (
  value,
  field
) {
  cy.get('.item:contains("Guests")').click();
  cy.get(".--options").click();
  cy.get('[href]:contains("Settings")').click();
  cy.get('[placeholder="' + field + '"]')
    .invoke("val")
    .should("eq", value);
});

When("I upload the file {string} as profile photo", (avatar) => {
  cy.get('.Button:contains("Upload a new avatar")').click();
  cy.fixture(avatar, "binary").then((content) => {
    const fileContent = Cypress.Blob.binaryStringToBlob(content);
    cy.get(".Settings__avatar-input").attachFile({
      fileContent,
      fileName: "hostelLogo.jpg",
    });
  });
});

Then("The new profile photo is saved", () => {
  cy.wait(3000)
  cy.get(".Settings__avatar").screenshot('admin_more_opt.feature-avatar');
  cy.get('.item:contains("Guests")').click();
  cy.get(".--options").click();
  cy.get('[href]:contains("Settings")').click();
  cy.wait(3000)
  cy.get(".Settings__avatar").compareSnapshot('avatar',0.2)
  // /Users/andresezequielpalacio/Documents/lobee/CypressAutomation/cypress-visual-screenshots/comparison/admin_more_opt.feature-undefined.png
  // /Users/andresezequielpalacio/Documents/lobee/CypressAutomation/cypress-visual-screenshots/comparison/admin_more_opt.feature-avatar.png
});
