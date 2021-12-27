require('dotenv').config()

const path = require("path");
const routes = require('./routes/index')
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const store = require('./database/db')['store'];
const app = express();

app.use( session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized:true,
  cookie: {
    store: store,
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 // Time is in miliseconds
},
  resave: false
})
);
app.use(cors({
  origin: ["http://localhost:3001"],
  methods: ["GET","POST"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/api", routes);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});



