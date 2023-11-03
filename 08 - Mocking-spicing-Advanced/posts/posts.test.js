import { beforeEach, describe, expect, it } from "vitest";

import { extractPostData } from "./posts";

const testContent = "Test Content";
const testTitle = "Test Title";

let testFormData;
beforeEach(() => {
  testFormData = {
    title: testTitle,
    content: testContent,
    get(identifier) {
      return this[identifier];
    },
  };
});

describe("extractPostData()", () => {
  it("should extract title and content from the provided form data", () => {
    const data = extractPostData(testFormData);

    expect(data.content).toBe(testContent);
    expect(data.title).toBe(testTitle);
  });
});
