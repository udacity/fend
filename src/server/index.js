const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const fetch = require("node-fetch");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("website"));

// designates what port the app will listen to for incoming requests
app.listen(process.env.SERVER_PORT, function () {
  console.log(
    `Shawn's Meaning Cloud server is listening on port ${process.env.SERVER_PORT}!`
  );
});

//POST route
app.post("/sentiment-analysis", analyzeURL);
function analyzeURL(request, response) {
  fetch(
    `${process.env.MEANING_CLOUD_SENTIMENT_ANALYSIS_ENDPOINT}?key=${process.env.MEANING_CLOUD_API_KEY}&lang=en&url=${request.body.url}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((analysis) => response.send(analysis))
    .catch((err) => response.send({ msg: "server error", err }));
}

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
