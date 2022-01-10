require('dotenv').config()
const environment = process.env.NODE_ENV || 'development';

const path = require("path");
const routes = require('./routes/index')
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const {store} = require('./database/db');
const app = express();

if (environment === 'production') {
  app.set('trust proxy', 1); // trust first proxy, crucial
}

app.use( session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized:false,
  store: store,
  proxy: true,
  cookie: {
    httpOnly: true,
    // secure: !(environment==='development'),
    secure: true,
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 // Time is in miliseconds
},
  resave: false
})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/static', express.static('uploads'))
app.use('/assets', express.static('public'))
app.use("/api", routes);

app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});



