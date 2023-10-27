import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

// String validation

// describe means test suites

describe("validateStringNotEmpty()", () => {
  it("should throw an error, if empty string is provided", () => {
    const input = "";

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).toThrow();
  });

  it("should throw an error with a message that contains a reason (must not be empty)", () => {
    const input = "";

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).toThrow(/must not be empty/);
  });

  it("should throw an error if a long empty string  is provided", () => {
    const input = "     ";

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).toThrow();
  });

  it("should throw an error, if another types of value is  provided", () => {
    const inputNum = 1;
    const inputBool = false;
    const inputObj = {};

    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });

  it("should not throw an error, if a non-empty string is provided", () => {
    const input = "valid";

    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).not.toThrow();
  });
});

// Number validation
describe("validateNumber()", () => {
  it("should throw an error , if NaN is provided", () => {
    const input = NaN;

    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow();
  });

  it("should throw an error with a message that contains a reason (Invalid number)", () => {
    const input = NaN;

    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow(/Invalid number/);
  });

  it("should throw an error if a non-numeric value is provided", () => {
    const input = "1";

    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow();
  });

  it("should not throw an error, if a number is provided", () => {
    const input = 1;
    const validationFn = () => validateNumber(input);
    expect(validationFn).not.toThrow();
  });
});
