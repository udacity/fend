import { isURLValid } from "./formValidation";

const form = document.getElementById("form");
const button = document.getElementById("submit-btn");
const spinner = document.getElementById("submit-spinner");
const sentiment_results = document.getElementById("sentiment-results");
const overall_sentiment = document.getElementById("overall-sentiment");
const sentiment_emoji = document.getElementById("sentiment-emoji");

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
        sentiment_results.style.display = "initial";

        /**
         * response object:
         * {
         *    overall_sentiment: string,
         *    sentiment_breakdown: {
         *      "P+": number,
         *       "P": number,
         *       "NEU": number,
         *        ... etc ...
         *    }
         * }
         */

        if (result.overall_sentiment === "P+") {
          overall_sentiment.innerHTML = "P+ - Strong Positive.";
          sentiment_emoji.classList.add("fa-grin-stars");
        } else if (result.overall_sentiment === "P") {
          overall_sentiment.innerHTML = "P - Positive.";
          sentiment_emoji.classList.add("fa-smile-beam");
        } else if (result.overall_sentiment === "NEU") {
          overall_sentiment.innerHTML = "NEU - Neutral.";
          sentiment_emoji.classList.add("fa-meh");
        } else if (result.overall_sentiment === "N") {
          overall_sentiment.innerHTML = "N - Negative";
          sentiment_emoji.classList.add("fa-frown");
        } else if (result.overall_sentiment === "N+") {
          overall_sentiment.innerHTML = "N+ - Strong Negative";
          sentiment_emoji.classList.add("fa-frown-open");
        } else {
          overall_sentiment.innerHTML = "NONE - No Sentiment Found.";
          sentiment_emoji.classList.add("fa-meh-blank");
        }

        var ctx = document.getElementById("sentiment-chart").getContext("2d");
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: "bar",

          // The data for our dataset
          data: {
            labels: ["P+", "P", "NEU", "N", "N+"],
            datasets: [
              {
                label: "Article / Blog Sentiment Breakdown by Sentences Found",
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                ],
                data: [
                  result.sentiment_breakdown["P+"],
                  result.sentiment_breakdown["P"],
                  result.sentiment_breakdown["NEU"],
                  result.sentiment_breakdown["N"],
                  result.sentiment_breakdown["N+"],
                ],
              },
            ],
          },

          // Configuration options go here
          options: {},
        });
      })
      .catch((error) => console.log("error", error));
  } else {
    // set an error alert when URL is not valid.
    alert("Not a valid URL!");
  }
}

export { handleSubmit, onFormSubmit };
