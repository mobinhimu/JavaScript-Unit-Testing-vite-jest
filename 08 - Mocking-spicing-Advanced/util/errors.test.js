import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain the provided status code, message and data", () => {
    const statusCode = 1;
    const message = "Message";
    const data = { key: "data" };

    const testError = new HttpError(statusCode, message, data);

    expect(testError.statusCode).toBe(statusCode);
    expect(testError.message).toBe(message);
    expect(testError.data).toBe(data);
  });

  it("should contain undefined as a data if data is not provided", () => {
    const statusCode = 1;
    const message = "Message";

    const testError = new HttpError(statusCode, message);

    expect(testError.statusCode).toBe(statusCode);
    expect(testError.message).toBe(message);
    expect(testError.data).not.toBeDefined();
  });
});

describe("class ValidationError", () => {
  it("should contain the provided message", () => {
    const message = "Test";

    const testError = new ValidationError(message);

    expect(testError.message).toBe(message);
  });
});
