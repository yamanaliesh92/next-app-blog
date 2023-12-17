const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY4NzEwMjc0ZDhiOWUyZDhhY2E3ODYiLCJpYXQiOjE3MDEzNDM0OTB9.AkTWA_mGL3Q4fzDcFW9qXhpf5flJFOeCQaqWS9arSiw";

describe("side", () => {
  it("cyy", () => {
    cy.visit("http://localhost:3000");

    cy.setCookie("token", token);

    cy.get('[data-cy="username"]').should("have.text", "Yaman");
    cy.get('[data-cy="test1"]').should("have.text", "All Tasks");
    cy.get('[data-cy="test2"]').should("have.text", "important");
    cy.get('[data-cy="test2"]').click().wait(3000);
    cy.url().should("include", "/important");
  });
});

export {};
