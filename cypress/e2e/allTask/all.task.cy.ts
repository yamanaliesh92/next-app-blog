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
    cy.get('[data-cy="finish6568714874d8b9e2d8aca78b"]').should(
      "have.text",
      "finish after:"
    );
    cy.get('[data-cy="task6568714874d8b9e2d8aca78b"]')
      .get('[data-cy="taskTitle6568714874d8b9e2d8aca78b"]')
      .should("have.text", "one")
      .get('[data-cy="taskDesc6568714874d8b9e2d8aca78b"]')
      .should("have.text", "what a good task today")
      .get('[data-cy="deleteTask6568714874d8b9e2d8aca78b"]')
      .click()
      .wait(3000);

    cy.get('[data-cy="task6568714874d8b9e2d8aca78b"]').should("be.hidden");
  });
});

export {};
