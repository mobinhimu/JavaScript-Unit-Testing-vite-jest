import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all the number from an array", () => {
  // arrange
  const arr = [1, 2];

  //act
  const result = add(arr);

  //assert
  const expectedResult = arr.reduce((acc, curr) => acc + curr, 0);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if any invalid number in an array", () => {
  // arrange
  const arr = ["invalid", 1];

  //act
  const result = add(arr);

  //assert
  const expectedResult = arr.reduce((acc, curr) => acc + curr, 0);
  expect(result).toBeNaN();
});

it("should yield 0 if an empty array is provided", () => {
  const arr = [];

  const result = add(arr);

  expect(result).toBe(0);
});

it("should throw an error if no value passed", () => {
  const resultFn = () => add();
  expect(resultFn).toThrow(/is not iterable/);
});

it("should correct sum if all the numeric number passed from an array", () => {
  const arr = ["1", "2"];
  const result = add(arr);
  const expectedResult = arr.reduce((acc, curr) => +acc + +curr, 0);
  expect(result).toBe(expectedResult);
});

it("should throw an error if i pass multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => add(num1, num2);

  expect(resultFn).toThrow(/is not iterable/);
});
