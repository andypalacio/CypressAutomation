describe("Login", () => {
  const BASEURL = Cypress.env("BASEURL");

  it("Succesfuly logs in", () => {
    cy.visit(BASEURL + "/home");
    cy.login();
    cy.url().should("include", "/guests");
  });

  it("non existent user", () => {
    cy.visit(BASEURL + "/home");
    cy.loginParams("test@gmail.com", "123123");

    cy.get(".Error").should(
      "contain",
      "There is no user registered with that email"
    );
  });

  it("empty user", () => {
    cy.visit(BASEURL + "/home");
    cy.loginParams("", "123123");

    cy.get(".Error").should("contain", "Please enter Email and Password");
  });

  it("empty Password", () => {
    cy.visit(BASEURL + "/home");
    cy.loginParams("andresepalacio+demo@gmail.com", "");

    cy.get(".Error").should("contain", "Please enter Email and Password");
  });

  it("wrong password", () => {
    cy.visit(BASEURL + "/home");
    cy.loginParams("andresepalacio+demo@gmail.com", "test");

    cy.get(".Error").should("contain", "Wrong password");
  });
});
