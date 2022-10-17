import { getEnvVariables } from "../../src/helpers/getEnvVariables";

describe("getEnvVariables()", () => {
  test("should return env variables", () => {
    const result = getEnvVariables();

    expect(result.VITE_API_KEY).toBeDefined();
    expect(result.VITE_API_URL).toBeDefined();
    expect(result.VITE_AUTH_DOMAIN).toBeDefined();
    expect(result.VITE_DATA_BASE_URL).toBeDefined();

    // it's not working right
  });
});
