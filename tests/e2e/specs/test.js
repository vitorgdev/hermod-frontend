describe("estudo 1", () => {
  it("teste google", () => {
    cy.visit("/google");
    cy.contains("h1", "buscar");
  });
});
