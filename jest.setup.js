// import "whatwg-fetch";

require("dotenv").config({
  path: ".env.test",
});

jest.mock("./src/helpers/getEnvVariables", () => ({
  getEnvVariables: () => ({ ...process.env }),
}));

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import "@testing-library/jest-dom";


