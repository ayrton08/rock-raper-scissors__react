import React from "react";
import { render, screen } from "@testing-library/react";
import { MyTextInput } from "../../src/components/MyTextInput";

jest.mock("formik");

describe("<MyTextInput />", () => {
  test("should render label", () => {
    render(<MyTextInput name="name" label="name label" />);

    const label = screen.getByText(/name label/i);
    expect(label).toBeDefined();
  });
  test("should render input", () => {
    const type = "text";

    render(<MyTextInput name="name" type={type} placeholder="Input" />);

    const input = screen.getByPlaceholderText(/input/i);
    expect(input).toBeDefined();
  });
});
