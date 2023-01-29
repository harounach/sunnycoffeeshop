import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.User || model("User", userSchema);

export default UserModel;
