import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please input firstname"],
    },

    lastname: {
      type: String,
      required: [true, "Please input lastname"],
    },

    email: {
      type: String,
      required: [true, "Please input email"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please input password"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
