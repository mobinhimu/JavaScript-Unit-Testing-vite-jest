import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value", (done) => {
  // arrange
  const testUserEmail = "example@gamil.com";

  //   act
  generateToken(testUserEmail, (err, token) => {
    // expect(token).toBeDefined();
    try {
      expect(token).toBeDefined();
      // expect(token).toBe(2);
      done();
    } catch (error) {
      done(error);
    }
  });
});

it("should generate a token value", () => {
  const testUserEmail = "example@gamil.com";

  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it("should generate a token value", async () => {
  const testUserEmail = "example@gamil.com";
  const token = await generateTokenPromise(testUserEmail);
  expect(token);
});
