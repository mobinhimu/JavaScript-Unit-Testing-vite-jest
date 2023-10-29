import { describe, expect, it } from "vitest";
import { cleanNumber, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
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
});

// it("should throw an error if there is not arguments is passed", () => {
//   const resultFn = () => transformToNumber();
//   expect(resultFn).toBeUndefined();
// });

describe("cleanNumber()", () => {
  it("should return a number of values array if an array of string number values is provided", () => {
    const numberInputs = ["1", "2"];
    const cleanedNumbers = cleanNumber(numberInputs);
    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberInputs = ["", 1];
    const cleanedNumbers = () => cleanNumber(numberInputs);
    expect(cleanedNumbers).toThrow();
  });
});
