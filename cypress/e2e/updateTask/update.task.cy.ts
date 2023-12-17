const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY4NzEwMjc0ZDhiOWUyZDhhY2E3ODYiLCJpYXQiOjE3MDEzNDM0OTB9.AkTWA_mGL3Q4fzDcFW9qXhpf5flJFOeCQaqWS9arSiw";

describe("allTask", () => {
  it("get task is done", () => {
    cy.visit("http://localhost:3000");
    cy.setCookie("token", token);
    cy.get('[data-cy="test1"]')
      .should("have.text", "All Tasks")
      .click()
      .wait(3000);
    cy.get('[data-cy="finish6568714e74d8b9e2d8aca78d"]').should(
      "have.text",
      "finish after:"
    );
    cy.get('[data-cy="task6568714e74d8b9e2d8aca78d"]')

      .get('[data-cy="updateTask6568714e74d8b9e2d8aca78d"]')
      .click()
      .wait(3000)
      .then(() => {
        cy.get('[data-cy="titleUpdate"]').should(
          "have.text",
          "Update your task"
        );
        cy.get('[data-cy="inputTitleUpdate"]').should("have.value", "onde");
        cy.get('[data-cy="importantUpdate"]').should("have.value", "true");

        cy.get('[data-cy="descUpdate"]')
          .clear()
          .type("new desc")
          .should("have.value", "new desc");

        cy.get('[data-cy="cancelUpdate"]').should("have.text", "cancel");

        cy.get('[data-cy="UpdateButton"]')
          .should("have.text", "update")
          .click()
          .wait("2000");
        cy.get('[data-cy="cancelUpdate"]').should("be.hidden");
      });
  });
});

export {};
