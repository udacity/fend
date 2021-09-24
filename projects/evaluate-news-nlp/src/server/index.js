const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
var path = require("path");

let userEntry = "https://www.kiwico.com"; // for testing
const apiKey = process.env.API_KEY;
const apiURL = `https://api.meaningcloud.com/sentiment-2.1?url=${userEntry}&key=${apiKey}&lang=en`;

const express = require("express");
const app = express();
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

// app.get("/test", function (req, res) {
//   res.send(mockAPIResponse);
// });
