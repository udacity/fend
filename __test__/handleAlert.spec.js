import { triggerAlert } from "../src/client/js/handleAlert";

describe("Testing the alert trigger functionaity", () => {
  test("isURLValid returns true when a valid URL is given", () => {
    document.body.innerHTML = `
      <div class="alert alert-danger" role="alert" id="myalertmessage"></div>
      `;

    const alert = document.getElementById("myalertmessage");

    triggerAlert(alert, "alert message");
    expect(alert.innerHTML === "alert message").toBe(true);
  });
});
