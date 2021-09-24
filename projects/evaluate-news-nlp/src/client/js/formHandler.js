function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("name").value;
  const apiKey = process.env.API_KEY;
  const apiRequestURL = `https://api.meaningcloud.com/sentiment-2.1?url=${formText}&key=${apiKey}&lang=en`;
  console.log(apiRequestURL);
  Client.getLanguageData(apiRequestURL);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test")
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.message;
    });
}

export { handleSubmit };
