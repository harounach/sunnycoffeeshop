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

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "scs_products",
  },
);

export const UserModel = models.User || model("User", userSchema);
export const ProductModel = models.Product || model("Product", productSchema);
