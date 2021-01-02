import { isURLValid } from "./formValidation";

const form = document.getElementById("form");
const button = document.getElementById("submit-btn");
const spinner = document.getElementById("submit-spinner");

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  handleSubmit(event);
}

function handleSubmit(event) {
  event.preventDefault();

  let url = document.getElementById("url-input").value;
  spinner.classList.add("spinner-border");
  button.disabled = true;

  if (isURLValid(url)) {
    var requestOptions = {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:5000/sentiment-analysis", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        spinner.classList.remove("spinner-border");
        button.disabled = false;
      })
      .catch((error) => console.log("error", error));
  } else {
    // set an error alert when URL is not valid.
    alert("Not a valid URL!");
  }
}

export { handleSubmit, onFormSubmit };
