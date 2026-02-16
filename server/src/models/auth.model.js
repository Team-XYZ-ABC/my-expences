import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    }
  },
  { timestamps: true }
);

const UserAuth = mongoose.model("Authentication", authSchema);

export default UserAuth;
