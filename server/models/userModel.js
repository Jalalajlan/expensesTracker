import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
      max: 50,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      max: 50,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      trim: true,
      max: 100,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
