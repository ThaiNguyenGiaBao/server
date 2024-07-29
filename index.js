const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
