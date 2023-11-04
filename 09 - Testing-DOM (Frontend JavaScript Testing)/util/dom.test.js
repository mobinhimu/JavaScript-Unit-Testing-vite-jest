import fs from "fs";
import path from "path";

import { beforeEach, expect, it, vi } from "vitest";
import { Window } from "happy-dom";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});

it('should add an error paragraph to an id ="errors" element', () => {
  showError("error");

  const htmlEle = document.querySelector("#errors");
  const errorEle = htmlEle.firstElementChild;

  expect(errorEle).not.toBeNull();
});

it("should not contain paragraph initially", () => {
  const htmlEle = document.querySelector("#errors");
  const errorEle = htmlEle.firstElementChild;

  expect(errorEle).toBeNull();
});

it("should output the provided message in the error paragraph", () => {
  const errorMessage = "test message";

  showError(errorMessage);

  const htmlEle = document.querySelector("#errors");
  const errorEle = htmlEle.firstElementChild;

  expect(errorEle.textContent).toBe(errorMessage);
});
