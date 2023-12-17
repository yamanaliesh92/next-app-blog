const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY4NzEwMjc0ZDhiOWUyZDhhY2E3ODYiLCJpYXQiOjE3MDEzNDM0OTB9.AkTWA_mGL3Q4fzDcFW9qXhpf5flJFOeCQaqWS9arSiw";

describe("crete task", () => {
  it("create is done ", () => {
    cy.visit("http://localhost:3000");

    cy.setCookie("token", token);

    cy.get('[data-cy="createTask"]')
      .should("have.text", "add Task")
      .click()
      .wait(3000);

    cy.url()
      .should("include", "/newTask")
      .then(() => {
        cy.get('[data-cy="title"]').should("have.text", "Create new Task");

        cy.get('[data-cy="titleInput"]')
          .type("first in e2e test")
          .should("have.value", "first in e2e test");
        // cy.get('[data-cy="dateInput"]').type("2023-12-12");

        // cy.get('[data-cy="dateInput"]').type("{enter}");

        cy.get('[data-cy="descInput"]')
          .type("desc")
          .should("have.value", "desc");

        cy.get('[data-cy="importantInput"]').check();

        cy.get('[data-cy="createButton"]')
          .should("have.text", "Create")
          .click()
          .wait(3000)
          .then(() => {
            cy.url().should("include", "/");
          });
      });
  });
});

export {};
