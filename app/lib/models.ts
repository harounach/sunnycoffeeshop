/*
 product
  title:
  desc:
  price:
  image:
  slug:
*/

import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "scs_users",
  },
);

export const UserModel = models.User || model("User", userSchema);
