const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const User = require("../models/user-model");
const Trip = require("../models/trip-model");
const config = require("../config");
const router = express.Router();

// GET route => to get a specific project/detailed view
router.get("/profile", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  User.findById(req.params.id)
    .populate("trips")
    .then(thisUser => {
      res.json(thisUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/profile/:id", (req, res) => {
  User.findById(req.params.id)
    .then(oneUser => {
      res.status(200).json(oneUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/profile/:id", (req, res) => {
  var idOfUser = mongoose.Types.ObjectId(req.params.id);
  var idOfTrip = req.body.thisTrip;
  var objectIdOfTrip = mongoose.Types.ObjectId(req.body.thisTrip);
  console.log("userid", idOfUser);
  console.log("tripid", idOfTrip);

  User.findByIdAndUpdate(idOfUser)
    .then(oneUser => {
      console.log(oneUser.trips);

      var tripIdArray = oneUser.trips.map(trip => trip._id.toString());
      if (tripIdArray.includes(idOfTrip)) {
        res.status(400).json({ message: "User already have this trip." });
        return;
      } else {
        oneUser.trips.push(objectIdOfTrip);
        oneUser.save(err => {
          if (err) {
            res
              .status(400)
              .json({ message: "Saving user to database went wrong." });
            return;
          } else {
            res.status(200).send({ message: "trip added" });
          }
        });
      }
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/profile/:id", (req, res) => {
  var idOfUser = mongoose.Types.ObjectId(req.params.id);
  var idOfTrip = req.body.trip._id;
  var objectIdOfTrip = mongoose.Types.ObjectId(idOfTrip);
  console.log("userid", idOfUser);
  console.log("tripid", idOfTrip);
  console.log("objtripid", objectIdOfTrip);

  User.findByIdAndUpdate(idOfUser)
    .then(oneUser => {
      var tripIdArray = oneUser.trips.map(trip => trip._id.toString());
      if (tripIdArray.includes(idOfTrip)) {
        oneUser.trips.pull(idOfTrip);
        oneUser.save(err => {
          console.log("after", oneUser.trips);
          if (err) {
            res
              .status(400)
              .json({ message: "Saving user to database went wrong." });
            return;
          } else {
            res.status(200).send({ message: "trip added" });
          }
        });
      }
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/send-email", (req, res, next) => {
  let { email, subject, message, replyto } = req.body;
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: config.mailuser,
      pass: config.pass
    }
  });
  transporter
    .sendMail({
      from: '"Travel-Mate" <yournewtravelmates@gmail.com>',
      to: email,
      subject: subject,
      text: message,
      replyTo: replyto,
      html: `<b>${message}</b>`
    })
    .then(info => {
      res.status(200).send({ message: "message has been sent" });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
