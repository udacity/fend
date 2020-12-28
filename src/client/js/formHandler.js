function handleSubmit(event) {
  event.preventDefault();

  let url = document.getElementById("url-input").value;

  var requestOptions = {
    method: "POST",
    body: JSON.stringify({ url }),
    headers: { "Content-Type": "application/json" },
  };

  fetch("http://localhost:5000/sentiment-analysis", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

// export { handleSubmit };
