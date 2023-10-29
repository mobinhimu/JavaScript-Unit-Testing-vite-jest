import { describe, expect, it } from "vitest";
import { generateOutputResult } from "./output";

describe("generateOutputResult()", () => {
  it("should return a string, no matter which value is passed", () => {
    const input1 = 1;
    const input2 = true;
    const input3 = "invalid";

    const result1 = generateOutputResult(input1);
    const result2 = generateOutputResult(input2);
    const result3 = generateOutputResult(input3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it("should return empty string, if 'no-calc' is provided as a result", () => {
    const result = "no-calc";

    const resultText = generateOutputResult(result);

    expect(resultText).toBe("");
  });

  it("should return a string that contains 'Invalid', if 'invalid' is provided as a result", () => {
    const result = "invalid";

    const resultText = generateOutputResult(result);

    expect(resultText).toContain("Invalid");
  });
});
