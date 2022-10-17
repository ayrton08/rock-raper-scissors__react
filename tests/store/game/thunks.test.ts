import { setUserId } from "../../../src/store/game/gameSlice";
import { signIn } from "../../../src/store/game/thunks";

jest.mock("react-redux");

describe("Test in thunks", () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test("signIn should called setUserId", async () => {
    const name = "Ayrton";
    const res = "srjL7zGhDPvGeOtRCKAa";

    // await signIn(name)(dispatch);

    // expect(dispatch).toHaveBeenCalledWith(setUserId(res));
  });
});
