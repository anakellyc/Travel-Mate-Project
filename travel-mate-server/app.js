require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");

const session = require("express-session");
const passport = require("passport");

require("./configs/passport");
var cloudinary = require("./configs/cloudinary");

mongoose
  .connect("mongodb://localhost/travel-mate-server", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);
if (process.env.ENV == "development") {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "hbs");
}

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// ADD SESSION SETTINGS HERE:
const config = require("./config");

app.use(
  session({
    secret: config.passportSecret,
    resave: true,
    saveUninitialized: true
  })
);

// USE passport.initialize() and passport.session() HERE:
app.use(passport.initialize());
app.use(passport.session());

//Production environment
if (process.env.ENV == "production") {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

//CORS
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://travelmate.fun",
      "http://www.travelmate.fun",
      "http://188.166.44.36"
    ]
  })
);

// default value for title local
app.locals.title = "Travel Mate";

const index = require("./routes/index");
app.use("/", index);

const userRoutes = require("./routes/user-routes");
app.use("/api", userRoutes);

const tripRoutes = require("./routes/trip-routes");
app.use("/api", tripRoutes);

const authRoutes = require("./routes/auth-routes");
app.use("/api", authRoutes);

module.exports = app;
