// method 1
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my first express project");
});
app.listen(1212, () => {
  console.log("Serve is running on this port 1212");
});
