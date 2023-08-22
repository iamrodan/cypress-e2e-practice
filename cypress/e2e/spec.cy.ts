describe("Login suite", () => {
  beforeEach(() => {
    cy.login();
  });
  it("should login and logout", () => {
    cy.contains("Welcome admin").should("exist");
  });
  it("should logout", () => {
    cy.get("#logout2").click();
    cy.get("#login2").should("be.visible");
  });
});
