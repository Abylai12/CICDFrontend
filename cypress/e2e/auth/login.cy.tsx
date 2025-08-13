describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should load login page and show form", () => {
    cy.get('[data-cy="login-page"]').should("exist");
    cy.get('[data-cy="login-form"]').should("exist");
  });

  it("should show validation errors on empty submit", () => {
    cy.get('[data-cy="login-submit"]').click();
    cy.contains("Invalid email address").should("exist");
    cy.contains("Password must be at least 6 characters").should("exist");
  });

  it("should login with valid credentials", () => {
    cy.get('[data-cy="login-email"]').type("testuser@gmail.com");
    cy.get('[data-cy="login-password"]').type("password123");
    cy.get('[data-cy="login-submit"]').click();
    cy.contains("Login successful!", { timeout: 10000 }).should("be.visible");
    // Should redirect to /home and show home page content
    cy.url().should("include", "/home");
    cy.contains("Hello home page").should("exist");
  });
});
