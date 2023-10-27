import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("should yield NaN for invalid numbers", () => {
  const input = "invalid";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

it("should transfer a sting number to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
  expect(result).toBe(+input);
});

// it("should throw an error if there is not arguments is passed", () => {
//   const resultFn = () => transformToNumber();
//   expect(resultFn).toBeUndefined();
// });
