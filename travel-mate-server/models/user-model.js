const mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/travel-mate-server");
const Schema = mongoose.Schema;
const Trip = require("./trip-model");

function capitalize(val) {
  if (typeof val !== "string") {
    val = "";
  }
  return val.charAt(0).toUpperCase() + val.substring(1);
}

const userSchema = new Schema(
  {
    firstName: { type: String, required: true, set: capitalize },
    lastName: { type: String, required: true, set: capitalize },
    email: { type: String, required: true },
    about: { type: String },
    password: { type: String, required: true, minlength: 8 },
    avatarUrl: {
      type: String,
      required: false,
      default:
        "https://res.cloudinary.com/anakcampos/image/upload/v1545153483/travel-mate/default-avatar.png"
    },
    trips: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
    facebookId: { type: String, required: false }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
