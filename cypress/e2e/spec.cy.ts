describe("Navigation", () => {
  it("Visits the first blog post", () => {
    cy.visit("/");
    cy.get('a[href*="posts"]').first().click();
    cy.url().should("include", "/posts");
    cy.get("h2").contains("Conor");
  });
});
