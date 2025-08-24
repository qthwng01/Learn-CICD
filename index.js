const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from my container and running in Render Cloud & Docker Image! 🐳");
});

app.listen(port, () => {
  console.log(`App listening at Port: ${port}`);
});
