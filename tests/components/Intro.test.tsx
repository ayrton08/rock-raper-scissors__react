import React from "react";
import { Intro } from "../../src/components/Intro";
import {
  render,
  screen,
  fireEvent,
  getByText,
  getByRole,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";
import userEvent from "@testing-library/user-event";

describe("<Intro />", () => {
  beforeEach(() => {
    const { container, debug } = render(
      <Provider store={store}>
        <Intro />
      </Provider>
    );
  });

  test("should contain the title and buttons", () => {
    const title = screen.getByText("Rock, paper or scissors");
    const buttons = screen.getAllByRole("button");

    expect(title).toBeDefined();
    expect(buttons.length).toBe(2);
  });
});
