describe("Login suite", () => {
  beforeEach(() => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");
    cy.login(username, password);
  });
  it("should login and logout", () => {
    cy.contains("Welcome admin").should("exist");
  });
  it("should logout", () => {
    cy.get("#logout2").click();
  });
});
