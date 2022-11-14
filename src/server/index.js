var path = require("path");
const express = require("express");
const cors = require("cors");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(cors());
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
const PORT = 5000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
