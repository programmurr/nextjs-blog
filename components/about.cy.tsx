import About from "./about";

describe("<About />", () => {
  it("Loads the ABout page", () => {
    cy.mount(<About />);
    // The new page should contain an h1 with "About page"
    cy.get("h1").contains("About Page");

    // Validate that a link with the expected URL is present
    // *Following* the link is better suited to an E2E test
    cy.get('a[href="/"]').should("be.visible");
  });
});
