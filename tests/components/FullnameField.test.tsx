import React from "react";
import { render, screen, logRoles } from "@testing-library/react";
import { FullnameField } from "../../src/components/FullnameField";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";

describe("<FullnameField />", () => {
  test("should render form", async () => {
    const submit = () => {
      console.log("ok");
    };

    const { container } = render(
      <Provider store={store}>
        <FullnameField submit={submit} />
      </Provider>
    );
    // logRoles(container);
    // screen.debug();

    const form = screen.getByRole("textbox");

    expect(form).toBeDefined();
  });
});
