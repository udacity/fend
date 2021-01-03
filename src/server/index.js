const dotenv = require("dotenv");
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
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

// generates sentiment analysis on a valid URL
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
    .then((analysis) => {
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
      const sentiment_response = {
        overall_sentiment: analysis.score_tag,
        sentiment_breakdown: {
          "P+": 0,
          P: 0,
          NEU: 0,
          N: 0,
          "N+": 0,
          NONE: 0,
          "Dog*4%": "milo",
        },
      };

      // possible score_tags (sentiments) found in article/blog sentences
      // P+: strong positive
      // P: positive
      // NEU: neutral
      // N: negative
      // N+: strong negative
      // NONE: without sentiment
      const sentiments = ["P+", "P", "NEU", "N", "N+", "NONE"];
      sentiments.forEach((sentiment) => {
        analysis.sentence_list.forEach((sentence) => {
          if (sentence.score_tag === sentiment) {
            sentiment_response.sentiment_breakdown[sentiment] =
              sentiment_response.sentiment_breakdown[sentiment] + 1;
          }
        });
      });

      response.send(sentiment_response);
    })
    .catch((err) => response.send({ msg: "server error", err }));
}
