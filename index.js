require('dotenv').config()

const express = require("express");
const path = require("path");
const app = express();
const routes = require('./routes/index')

app.use(express.static(path.join(__dirname, "frontend/build")));

app.use("/user", routes.user)
app.use("/registration", routes.registration)
app.use("/post", routes.post)

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});