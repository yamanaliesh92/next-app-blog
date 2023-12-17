describe("to login", () => {
  it.only("have account and navigate to sign page", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[data-cy="toSign"]').should("have.text", "Create a new account");

    cy.get('[data-cy="toSign"]')
      .click()
      .wait(200)
      .then(() => {
        cy.url().should("include", "/sign");
      });
  });
});

export {};
