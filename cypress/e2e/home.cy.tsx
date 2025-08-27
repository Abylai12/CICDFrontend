describe("Home Page", () => {
  it("should show home page and logout button when authenticated", () => {
    cy.visit("/login");
    cy.get('[data-cy="login-email"]').type("testuser@gmail.com");
    cy.get('[data-cy="login-password"]').type("password123");
    cy.get('[data-cy="login-submit"]').click();
    cy.contains("Login successful!", { timeout: 10000 }).should("be.visible");
    // Should redirect to /home and show home page content
    cy.url().should("include", "/home");
    cy.contains("Hello home page").should("exist");
    cy.contains("logout").should("exist");
  });
});
