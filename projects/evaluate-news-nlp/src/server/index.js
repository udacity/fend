const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
var path = require("path");

const express = require("express");
const app = express();
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

// app.get("/test", function (req, res) {
//   res.send(mockAPIResponse);
// });
