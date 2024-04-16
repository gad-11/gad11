import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(1010, () => {
  console.log("App is running in the best way");
});
