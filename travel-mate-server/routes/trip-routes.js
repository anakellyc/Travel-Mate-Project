const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user-model");
const Trip = require("../models/trip-model");

const router = express.Router();

// GET route => to get all the projects
router.get("/trips", (req, res, next) => {
  Trip.find()
    .then(allTheTrips => {
      res.json(allTheTrips);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST route => to create a new task
router.post("/trips", (req, res, next) => {
  Trip.create({
    destination: req.body.destination,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    pointsOfInterest: req.body.pointsOfInterest,
    owner: req.user._id
  })
    .then(response => {
      User.findByIdAndUpdate(req.user._id, {
        $push: { trips: response._id }
      })
        .then(theResponse => {
          res.json(theResponse);
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/trips/:id", (req, res) => {
  Trip.findById(req.params.id)
    .then(oneTrip => {
      res.status(200).json(oneTrip);
    })
    .catch(err => {
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
      res.json(oneTrip);
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
        message: `Trip with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
