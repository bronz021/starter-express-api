const express = require("express");
const ejs = require("ejs");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
app.listen(port || preccess.ENV.PORT, () => {
  console.log(`App is running on port ${port}`);
});
