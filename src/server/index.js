const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const fetch = require('node-fetch');

const app = express();

app.use(express.static("dist"));

console.log(__dirname);

app.get("/sentiment-analysis", function (req, res) {
  fetch(`${process.env.MEANING_CLOUD_SENTIMENT_ANALYSIS_ENDPOINT}?key=${process.env.MEANING_CLOUD_API_KEY}&lang=en&url=https://www.nytimes.com/2020/12/27/us/politics/trump-signs-pandemic-relief.html`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(analysis => console.log('analysis', analysis))
  .catch(err => console.log('error', err))
  res.send('Hello')
});

// designates what port the app will listen to for incoming requests
app.listen(process.env.SERVER_PORT, function () {
  console.log(`Shawn's Meaning Cloud server is listening on port ${process.env.SERVER_PORT}!`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
