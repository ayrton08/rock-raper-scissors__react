/// <reference types="cypress" />

describe("Welcome page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  context("<Intro />", () => {
    it("should contains title and buttons", () => {
      cy.getByData("intro-title")
        .should("exist")
        .contains(/rock, paper or scissors/i);

      cy.getByData("intro-buttons")
        .find("button")
        .should((button) => {
          if (button.length !== 2) {
            throw new Error("Did not find 2 elementes");
          }
        });
    });
  });
  context("New Game", () => {
    it("a player could be create a new game room", () => {
      cy.getByData("new-game").click();
      cy.getByData("fullname").should("be.visible").type("John");
      cy.getByData("save-name").click();

      cy.getByData("loader-new-room")
        .should("exist")
        .contains(/getting the code room/i);
      cy.url().should("include", "/game");
    });
  });

  context("Enter a Room", () => {
    it("a player could be enter in a exiting game room", () => {
      cy.getByData("enter-room").click();
      cy.getByData("code-room").should("be.visible").type("1678");
      cy.getByData("save-code").click();

      cy.getByData("fullname").should("be.visible").type("John");
      cy.getByData("save-name").click();

      cy.url().should("include", "/game");
    });
  });
});
