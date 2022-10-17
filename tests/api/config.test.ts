import requestApi from "../../src/api/config";

describe("Test in the requestApi", () => {
  test("debe de tener la configuracion por defecto ", () => {
    expect(requestApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });
});
