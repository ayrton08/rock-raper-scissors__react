import React from "react";
import { render, screen } from "@testing-library/react";
import { FullnameField } from "../../src/components/FullnameField";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";

describe("<FullnameField />", () => {
  test("should render form", async () => {
    const submit = () => {
      console.log("ok");
    };

    render(
      <Provider store={store}>
        <FullnameField submit={submit} />
      </Provider>
    );

    const form = await screen.findByRole("textbox");

    expect(form).toBeDefined();
  });
});
