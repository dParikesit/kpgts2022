require("dotenv").config();
const nodemailer = require("nodemailer");
const Email = require("email-templates");

const transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: process.env.MAILER_PORT,
  secure: !(process.env.NODE_ENV === "development"),
  auth: {
    user: process.env.MAILER_USERNAME,
    pass: process.env.MAILER_PASSWORD,
  },
});

const email = new Email({
  views: { root: "./templates", options: { extension: "ejs" } },
  message: {
    from: "noreply@kpgts2022.com",
  },
  preview: process.env.NODE_ENV === "development",
  send: !(process.env.NODE_ENV === "development"),
  transport: transporter,
});

module.exports = email;
