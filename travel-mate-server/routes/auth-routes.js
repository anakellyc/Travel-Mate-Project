const express = require("express");
const authRoutes = express.Router();
const parser = require("../configs/cloudinary");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const multer = require("multer");
var bodyParser = require("body-parser");
var config = require("../config");

const User = require("../models/user-model");

authRoutes.post("/signup", parser.single("avatarUrl"), (req, res, next) => {
  debugger;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const about = req.body.about;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  if (req.file) {
    var avatarUrl = req.file.url;
  }

  debugger;
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    res.status(400).json({ message: "Please provide all required fields" });
    return;
  }

  if (password.length <= 7) {
    res.status(400).json({
      message: "Please make your password is at least 8 characters long"
    });
    return;
  }

  if (password != confirmPassword) {
    res.status(400).json({
      message: "Passwords don't match"
    });
    return;
  }

  User.findOne({ email }, (err, foundUser) => {
    debugger;
    if (err) {
      res.status(500).json({ message: "User check went bad" });
      return;
    }

    if (foundUser) {
      debugger;
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      about: about,
      password: hashPass,
      avatarUrl: avatarUrl
    });
    debugger;
    aNewUser.save(err => {
      debugger;
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      }
      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewUser, err => {
        debugger;
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }
        // if (aNewUser) {
        //   debugger;
        //   res.status(200).json(aNewUser);
        //   res.redirect("/profile");
        //   return;
        // }
        // Send the user's information to the frontend
        debugger;
        //res.status(200).json(req.user);
        res.status(200).json(aNewUser);
        debugger;
      });
    });
  });
});

authRoutes.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    //debugger;
    //console.log(theUser.email);
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      //debugger;
      res.status(200).json(theUser);
      console.log("user logged in");
    });
  })(req, res, next);
});

authRoutes.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

authRoutes.get("/loggedin", (req, res, next) => {
  //debugger;
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

authRoutes.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    scope: ["email", "user_photos"]
    // res.redirect(`${config.reactUrl}/profile`);
    // console.log("Authenticated with facebook");
  })
);
// authRoutes.get(
//   "/auth/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: "/profile",
//     failureRedirect: "/login"
//   })
// );

authRoutes.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.status(200).json(foundUser);
    res.redirect(`{config.reactUrl/profile}`);
  }
);

module.exports = authRoutes;
