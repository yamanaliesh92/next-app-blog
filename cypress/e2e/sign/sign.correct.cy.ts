describe("test sign page is done", () => {
  it("create user is correctly", () => {
    cy.visit("http://localhost:3000/sign");
    cy.get('[data-cy="title"]').should("have.text", "welcome in car store");
    cy.get('[data-cy="emailInput"]')
      .type("email@gamil.com")
      .should("have.value", "email@gamil.com");

    cy.get('[data-cy="passwordInput"]')
      .type("password")
      .should("have.value", "password");

    cy.get('[data-cy="nameInput"]')
      .type("username")
      .should("have.value", "username");

    cy.get('[data-cy="toLogin"]').should("have.text", "Do have account?");
    cy.get('[data-cy="submit"]').should("have.text", "sign");
    cy.get('[data-cy="submit"]')
      .click()
      .wait(3000)
      .then(() => {
        cy.url().should("include", "/login");
      });
  });
});

export {};
