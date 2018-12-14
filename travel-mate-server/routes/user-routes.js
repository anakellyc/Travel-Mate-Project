const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user-model");
const Trip = require("../models/trip-model");

const router = express.Router();

// GET route => to get all the projects
router.get("/profile", (req, res, next) => {
  User.find()
    .populate("trips")
    .then(allTheTrips => {
      res.json(allTheTrips);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get a specific project/detailed view
router.get("/profile/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // our projects have array of tasks' ids and
  // we can use .populate() method to get the whole task objects
  //                                   ^
  //                                   |
  //                                   |
  User.findById(req.params.id)
    .populate("trips")
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST route => to create a new project
router.post("/signup", (req, res, next) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    about: req.body.about,
    avatarUrl: `/uploads/${req.file.filename}`,
    trips: []
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to update a specific project
// router.put("/trips/:id", (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Trip.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => {
//       res.json({
//         message: `Trip with ${req.params.id} is updated successfully.`
//       });
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// DELETE route => to delete a specific project
// router.delete("/trips/:id", (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Trip.findByIdAndRemove(req.params.id)
//     .then(() => {
//       res.json({
//         message: `Trip with ${req.params.id} is removed successfully.`
//       });
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

module.exports = router;
