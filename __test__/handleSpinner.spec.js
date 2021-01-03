import { spinner_OFF, spinner_ON } from "../src/client/js/handleSpinner";

describe("Testing spinner functionality", () => {
  test("tests that the spinner can be turned ON and then OFF", () => {
    document.body.innerHTML = `
    <button type="submit" class="btn btn-primary" id="submit-btn">
    <span id="submit-spinner" class="spinner-border-sm" role="status" aria-hidden="true"></span>
    Get Sentiment Analysis</button>
      `;

    const button = document.getElementById("submit-btn");
    const spinner = document.getElementById("submit-spinner");

    spinner_ON(spinner, button);
    expect(spinner.classList.contains("spinner-border")).toBe(true);
    spinner_OFF(spinner, button);
    expect(spinner.classList.contains("spinner-border")).toBe(false); // true
  });
});
