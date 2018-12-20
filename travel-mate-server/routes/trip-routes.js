const express = require("express");
const mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/travel-mate-server");
const User = require("../models/user-model");
const Trip = require("../models/trip-model");

const router = express.Router();

//GET route => to get all the trips
router.get("/search", (req, res, next) => {
  Trip.find()
    .then(allTheTrips => {
      res.json(allTheTrips);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/trips", (req, res, next) => {
  //debugger;
  //console.log("request", req);
  //console.log("response", res);
  // var idOfUserLoggedIn = "";
  var idOfUserLoggedIn = mongoose.Types.ObjectId(res.req.session.passport.user);
  User.find({ _id: idOfUserLoggedIn })
    .populate("trips")
    .then(usersWithTrips => {
      //console.log("user with trips", usersWithTrips);
      res.json(usersWithTrips[0].trips);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get a specific project/detailed view
router.get("/trips/:id", (req, res) => {
  // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
  //   res.status(400).json({ message: "Specified id is not valid" });
  //   return;
  // }

  Trip.findById(req.params.id)
    .populate("owner")
    .then(oneTrip => {
      res.status(200).json(oneTrip);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST route => to create a new task
router.post("/trips", (req, res, next) => {
  //debugger;
  //console.log(req);
  let newstartDate = new Date(req.body.startDate);
  let day = newstartDate.getDate();
  let month = newstartDate.getMonth();
  let year = newstartDate.getFullYear();
  let startDate = `${day}/${month + 1}/${year}`;

  let newEndDate = new Date(req.body.endDate);
  let dayEnd = newEndDate.getDate();
  let monthEnd = newEndDate.getMonth();
  let yearEnd = newEndDate.getFullYear();
  let endDate = `${dayEnd}/${monthEnd + 1}/${yearEnd}`;

  //debugger;
  Trip.create({
    destination: req.body.destination,
    startDate: newstartDate,
    endDate: newEndDate,
    pointsOfInterest: req.body.pointsOfInterest,
    owner: req.user._id
  })
    .then(response => {
      //debugger;
      User.findByIdAndUpdate(req.user._id, {
        $push: { trips: response._id }
      })
        .then(theResponse => {
          res.json(theResponse);
        })
        .catch(err => {
          //debugger;
          res.json(err);
        });
    })
    .catch(err => {
      //debugger;
      res.json(err);
    });
});

// PUT route => to update a specific Trip
router.put("/trips/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Trip.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Trip has been updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE route => to delete a specific Trip
router.delete("/trips/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Trip.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Trip has been removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
