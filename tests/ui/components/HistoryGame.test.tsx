import React from "react";
import { render, screen } from "@testing-library/react";
import { HistoryGame } from "../../../src/ui/";
import { Provider } from "react-redux";
import { store } from "../../../src/store/store";

import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<HistoryGame />", () => {
  test("should contained elements", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <HistoryGame />
        </MemoryRouter>
      </Provider>
    );

    const player1 = screen.getByText(/player 1/i);
    const player2 = screen.getByText(/player 2/i);
    const results = screen.getAllByText("0");
    const buttonPlayAgain = screen.getByRole("button", { name: /play/i });

    expect(player1).toBeDefined();
    expect(player2).toBeDefined();
    expect(results.length).toBe(2);
    expect(buttonPlayAgain).toBeDefined();
  });
});
