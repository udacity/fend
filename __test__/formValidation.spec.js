import { isURLValid } from "../src/client/js/formValidation";

describe("Testing the URL validation functionality", () => {
  test("isURLValid returns true when a valid URL is given", () => {
    const test_URL = "http://google.com";
    expect(isURLValid(test_URL)).toBe(true);
  });

  test("isURLValid returns false when an invalid URL is given", () => {
    const test_URL = "httgoogle.com";
    expect(isURLValid(test_URL)).toBe(false);
  });
});
