const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    // required: true,
  },
  googleId: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String, // You can store the URL of the user's profile picture
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
