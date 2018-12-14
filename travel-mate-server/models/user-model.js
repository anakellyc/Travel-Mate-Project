const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/travel-mate");
const Schema = mongoose.Schema;
const Trip = require("./trip-model");

function capitalize(val) {
  if (typeof val !== "string") {
    val = "";
  }
  return val.charAt(0).toUpperCase() + val.substring(1);
}

const userSchema = new Schema({
  firstName: { type: String, required: true, set: capitalize },
  lastName: { type: String, required: true, set: capitalize },
  email: { type: String },
  about: { type: String },
  password: { type: String, minlength: 8 },
  avatarUrl: {
    type: String,
    required: false,
    default: "img/default-avatar.png"
  },
  // trips: { type: Array }
  trips: [{ type: Schema.Types.ObjectId, ref: "Trip" }]
  // owner will be added later on
});

const User = mongoose.model("User", userSchema);

module.exports = User;
