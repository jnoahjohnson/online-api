var express = require("express");
var app = express();
const port = process.env.PORT || 3000;

let isOnline = false;

app.get("/offline", async (req, res) => {
  isOnline = false;
  res.json({ isOnline });
});

app.get("/online", async (req, res) => {
  isOnline = true;
  res.json("{ isOnline }");
});

app.get("/check-online", async (req, res) => {
  res.json({ isOnline });
});

app.listen(port, () => {
  console.log("Server running on port 3000");
});
