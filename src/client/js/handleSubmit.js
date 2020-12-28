import { isURLValid } from "./formValidation";

const form = document.getElementById("form");

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  handleSubmit(event);
}

function handleSubmit(event) {
  event.preventDefault();

  let url = document.getElementById("url-input").value;

  if (isURLValid(url)) {
    var requestOptions = {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:5000/sentiment-analysis", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  } else {
    // set an error alert when URL is not valid.
    alert("Not a valid URL!");
  }
}

export { handleSubmit, onFormSubmit };
