/// <reference types="cypress" />

describe("Welcome page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("passes", () => {
    cy.getByData("intro-title")
      .should("exist")
      .contains(/rock, paper or scissors/i);
  });
});
