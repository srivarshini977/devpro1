const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to my dev project🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});