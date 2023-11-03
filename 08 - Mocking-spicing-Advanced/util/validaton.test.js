import { expect, it } from "vitest";
import { validateNotEmpty } from "./validation";

it("should throw an error if empty string is provided", () => {
  const text = "";
  const validationFn = () => validateNotEmpty(text);
  expect(validationFn).toThrow();
});

it("should throw an error if empty string is provided", () => {
  const text = "            ";
  const validationFn = () => validateNotEmpty(text);
  expect(validationFn).toThrow();
});

it("should throw an error with provided error message", () => {
  const text = "";
  const errorMessage = "Test";

  const validationFn = () => validateNotEmpty(text, errorMessage);
  expect(validationFn).toThrow(errorMessage);
});
