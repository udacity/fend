const dotenv = require("dotenv");
dotenv.config();

console.log(`Your API key is ${process.env.MEANING_CLOUD_API_KEY}`);

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.send('Hello')
});

// designates what port the app will listen to for incoming requests
app.listen(process.env.SERVER_PORT, function () {
  console.log(`Shawn's Meaning Cloud server is listening on port ${process.env.SERVER_PORT}!`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
