import { extractEnterNumberValues, extractNumbers } from "./src/parser.js";
import {
  validateStringNotEmpty,
  validateNumber,
} from "./src/util/validation.js";
import { add, calculateResult } from "./src/math.js";
import { transformToNumber } from "./src/util/numbers.js";
import { generateOutputResult, outputText } from "./output.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = extractEnterNumberValues(form);

  const result = calculateResult(numberInputs);

  const resultText = generateOutputResult(result);
  outputText(resultText);
}

form.addEventListener("submit", formSubmitHandler);
