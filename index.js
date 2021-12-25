require('dotenv').config()

const path = require("path");
const routes = require('./routes/index')

const express = require("express");
const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/api", routes)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});