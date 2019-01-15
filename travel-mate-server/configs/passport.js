const User = require("../models/user-model");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
var config = require("../config");

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, userDocument);
    console.log(userDocument);
  });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, next) => {
    User.findOne({ email }, (err, foundUser) => {
      if (err) {
        next(err);
        return;
      }

      if (!foundUser) {
        next(null, false, { message: "Incorrect email." });
        return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        next(null, false, { message: "Incorrect password." });
        return;
      }

      next(null, foundUser);
    });
  })
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${config.reactUrl}/auth/facebook/callback`,
      // passReqToCallback: true,
      profileFields: ["id", "emails", "name", "photos", "picture"]
    },
    function(accessToken, refreshToken, profile, done) {
      debugger;
      User.find({ facebookId: profile.id }, function(err, foundUser, next) {
        //begin
        debugger;
        if (err) {
          console.log("error:", err);
          return done(err);
          // next(err);
          // return;
        }

        if (!foundUser) {
          console.log(profile.name);
          User.create(
            {
              facebookId: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value,
              avatarUrl: profile.picture
            },
            function(err, foundUser) {
              // done(null, foundUser);
              req.login(foundUser, err => {
                if (err) {
                  res.status(500).json({ message: "Session save went bad." });
                  return;
                }

                // We are now logged in (that's why we can also send req.user)
                //debugger;
                res.status(200).json(foundUser);
                console.log("user logged in");
              });
            }
          );
          // const aNewUser = new User({
          //   facebookId: profile.id,
          //   firstName: profile.name.givenName,
          //   lastName: profile.name.familyName,
          //   email: profile.emails[0].value,
          //   avatarUrl: profile.picture
          // });
          // debugger;
          // aNewUser.save(err => {
          //   debugger;
          //   if (err) {
          //     res
          //       .status(400)
          //       .json({ message: "Saving user to database went wrong." });
          //     return;
          //   }
          //   return;
          // });
        }

        // next(null, foundUser[0]);

        next(
          null,
          req.login(foundUser[0], err => {
            if (err) {
              res.status(500).json({ message: "Session save went bad." });
              return;
            }

            // We are now logged in (that's why we can also send req.user)
            //debugger;
            res.status(200).json(foundUser);
            console.log("user logged in");
          })
        );
      });
    }
  )
);
//end

// debugger;
// console.log(result.length);
// if (err) done(err, false);
// else if (result.length > 0) done(null, result[0]);
// else if (result.length == 0) {
//   const aNewUser = new User({
//     facebookId: profile.id,
//     firstName: profile.name.givenName,
//     lastName: profile.name.familyName,
//     email: profile.emails[0].value,
//     avatarUrl: profile.picture
//   });
//   debugger;
//   aNewUser.save(err => {
//     debugger;
//     if (err) {
//       res
//         .status(400)
//         .json({ message: "Saving user to database went wrong." });
//       return;
//     }
//     // Automatically log in user after sign up
//     // .login() here is actually predefined passport method
//     req.login(aNewUser, err => {
//       debugger;
//       if (err) {
//         res
//           .status(500)
//           .json({ message: "Login after signup went bad." });
//         return;
//       }
//       // if (aNewUser) {
//       //   debugger;
//       //   res.status(200).json(aNewUser);
//       //   res.redirect("/profile");
//       //   return;
//       // }
//       // Send the user's information to the frontend
//       debugger;
//       //res.status(200).json(req.user);
//       res.status(200).json(aNewUser);
//       debugger;
//     });
//   });
// }
//});
//   User.create(
//     {
//       facebookId: profile.id,
//       firstName: profile.name.givenName,
//       lastName: profile.name.familyName,
//       email: profile.emails[0].value,
//       avatarUrl: profile.picture
//       // avatarUrl: profile.photos
//       //   ? profile.photos[0].value
//       //   : "https://res.cloudinary.com/anakcampos/image/upload/v1545153483/travel-mate/default-avatar.png"
//     },
//     function(err, createdUser) {
//       done(null, createdUser);
//     }
//   );
// } else {
//   done(null, false);
// }
//});
//}
//)
//);
