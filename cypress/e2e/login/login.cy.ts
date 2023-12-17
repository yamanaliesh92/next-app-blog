describe("test login page is done", () => {
  it("create user is correctly", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[data-cy="title"]').should("have.text", "welcome in car store");
    cy.get('[data-cy="emailInput"]')
      .type("email@gamil.com")
      .should("have.value", "email@gamil.com");

    cy.get('[data-cy="passwordInput"]')
      .type("password")
      .should("have.value", "password");

    cy.get('[data-cy="or"]').should("have.text", "OR");

    cy.get('[data-cy="toSign"]').should("have.text", "Create a new account");
    cy.get('[data-cy="submit"]').should("have.text", "Login");
    cy.get('[data-cy="submit"]')
      .click()
      .wait(3000)
      .then(() => {
        cy.url().should("include", "/");
      });
  });
});

export {};
