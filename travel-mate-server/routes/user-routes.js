const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user-model");
const Trip = require("../models/trip-model");

const router = express.Router();

// GET route => to get all the projects
// router.get("/profile", (req, res, next) => {
//   User.find()
//     .populate("trips")
//     .then(allTheTrips => {
//       res.json(allTheTrips);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// GET route => to get a specific project/detailed view
router.get("/profile", (req, res, next) => {
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
    .then(thisUser => {
      res.json(thisUser);
    })
    .catch(err => {
      res.json(err);
    });
  // .then(response => {
  //   res.status(200).json(response);
  // })
  // .catch(err => {
  //   res.json(err);
  // });
});

router.get("/profile/:id", (req, res) => {
  // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
  //   res.status(400).json({ message: "Specified id is not valid" });
  //   return;
  // }
  debugger;
  User.findById(req.params.id)
    .then(oneUser => {
      res.status(200).json(oneUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/profile/:id", (req, res) => {
  // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
  //   res.status(400).json({ message: "Specified id is not valid" });
  //   return;
  // }

  var idOfUser = mongoose.Types.ObjectId(req.params.id);
  var idOfTrip = mongoose.Types.ObjectId(req.body.thisTrip);
  console.log("userid", idOfUser);
  console.log("tripid", idOfTrip);
  debugger;
  User.findByIdAndUpdate(idOfUser)
    .then(oneUser => {
      oneUser.trips.push(idOfTrip);
      oneUser.save(err => {
        debugger;
        if (err) {
          res
            .status(400)
            .json({ message: "Saving user to database went wrong." });
          return;
        }
      });
    })
    .catch(err => {
      res.json(err);
    });
  //.then(oneUser => {
  //console.log(oneUser.trips);
  // if (oneUser.trips.includes(idOfTrip)) {
  //   debugger;
  //   res.status(400).json({ message: "User already have this trip." });
  //   return;
  // } else {
  // oneUser.trips.push(idOfTrip);
  // oneUser.save(err => {
  //   debugger;
  //   if (err) {
  //     res
  //       .status(400)
  //       .json({ message: "Saving user to database went wrong." });
  //     return;
  //   }
  //   }
  // });
  //})
});

module.exports = router;
