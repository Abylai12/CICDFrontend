describe("Signup Page", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });
  it("should load signup page and show form", () => {
    cy.get('[data-cy="signup-page"]').should("exist");
    cy.get('[data-cy="signup-form"]').should("exist");
    cy.get('[data-cy="signup-name"]').should("exist");
    cy.get('[data-cy="signup-email"]').should("exist");
    cy.get('[data-cy="signup-password"]').should("exist");
    cy.get('[data-cy="signup-submit"]').should("exist");
  });

  it("should show validation errors on empty submit", () => {
    cy.get('[data-cy="signup-submit"]').click();
    cy.contains("Username must be at least 2 characters").should("exist");
    cy.contains("Invalid email address").should("exist");
    cy.contains("Password must be at least 6 characters").should("exist");
  });

  it("should signup with valid credentials", () => {
    cy.get('[data-cy="signup-name"]').type("testuser1");
    cy.get('[data-cy="signup-email"]').type("testuser1@gmail.com");
    cy.get('[data-cy="signup-password"]').type("password123");
    cy.get('[data-cy="signup-submit"]').click();

    cy.contains("Sign up successful!", { timeout: 10000 }).should("be.visible");
    // Should redirect to /login and show login page content
    cy.url().should("include", "/login");
    cy.get('[data-cy="login-page"]').should("exist");
  });
});
