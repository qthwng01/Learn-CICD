const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Auto Deloy using Webhook Render! 🐳");
});

app.listen(port, () => {
  console.log(`App listening at Port: ${port}`);
});
