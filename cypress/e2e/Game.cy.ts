/// <reference types="cypress" />

describe("Game page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  context("Player 1", () => {
    it("player 1 could play a round", () => {
      cy.getByData("enter-room").click();
      cy.getByData("code-room").type("1991");
      cy.getByData("save-code").click();

      cy.getByData("fullname").type("Ayrton");
      cy.getByData("save-name").click();

      cy.url().should("include", "/game");

      cy.getByData("button-play").click();

      cy.getByData("scissor").click();
    });
  });

  context("Player 2", () => {
    it("a player could be enter in a exiting game room", () => {
      cy.getByData("enter-room").click();
      cy.getByData("code-room").type("1991");
      cy.getByData("save-code").click();

      cy.getByData("fullname").type("Juan");
      cy.getByData("save-name").click();

      cy.url().should("include", "/game");

      cy.getByData("button-play").click();
      cy.getByData("rock").click();

      cy.url().should("include", "/result");
    });
  });
});
