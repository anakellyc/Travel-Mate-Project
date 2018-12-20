const mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/travel-mate-server");
const Schema = mongoose.Schema;
var User = require("../models/user-model");

function capitalize(val) {
  if (typeof val !== "string") {
    val = "";
  }
  return val.charAt(0).toUpperCase() + val.substring(1);
}

const tripSchema = new Schema({
  destination: { type: String, required: true, set: capitalize },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  pointsOfInterest: { type: Array },
  owner: { type: Schema.Types.ObjectId, ref: "User" }
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
