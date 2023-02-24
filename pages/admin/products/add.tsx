import { useState } from "react";
import Link from "next/link";

import AdminLayout from "@/components/Layout/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faRightFromBracket,
  faShoppingBasket,
  faTag,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import TextField from "@/components/Form/TextField";
import Button from "@/components/Button/Button";
import axios from "axios";

export default function AdminAddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [image, setImage] = useState("");
  const [slug, setSlug] = useState("");

  const canSubmit =
    Boolean(title) && Boolean(description) && Boolean(price) && Boolean(image);

  const CREATE_PRODUCT_API_URL = "http://localhost:4000/api/products";

  const handleSubmit = async () => {
    if (canSubmit) {
      try {
        const data = {
          title,
          description,
          price: Number(price),
          image,
          slug,
        };
        const response = await axios({
          method: "POST",
          url: CREATE_PRODUCT_API_URL,
          data,
          validateStatus: () => true,
        });

        const result = response.data;
        const { message, error: updateError } = result;
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <AdminLayout>
      <section className="container mx-auto mt-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3 bg-neutral-100 px-6 py-4">
            <h2 className="mb-4 text-center text-xl">Admin: John Doe</h2>
            <p className="mb-14 text-center text-base text-neutral-500">
              Joined on 12 Dec 2022
            </p>

            <div className="flex justify-center">
              <ul className="inline-flex flex-col gap-4">
                <li>
                  <Link
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/admin/dashboard"}
                  >
                    <FontAwesomeIcon
                      className="h-6 w-6"
                      icon={faBarsProgress}
                    />
                    <span className="text-base">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 text-yellow-700"
                    href={"/admin/products"}
                  >
                    <FontAwesomeIcon
                      className="h-6 w-6"
                      icon={faShoppingBasket}
                    />{" "}
                    <span className="text-base">Products</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/admin/orders"}
                  >
                    <FontAwesomeIcon className="h-6 w-6" icon={faTag} />{" "}
                    <span className="text-base">Orders</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/admin/users"}
                  >
                    <FontAwesomeIcon className="h-6 w-6" icon={faUserGroup} />{" "}
                    <span className="text-base">Users</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/account/profile"}
                  >
                    <FontAwesomeIcon
                      className="h-6 w-6"
                      icon={faRightFromBracket}
                    />
                    <span className="text-base">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Main Content */}
          <div className="col-span-9">
            <h1 className="mb-4 text-center text-2xl">Add Product</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              Add and customize your product
            </p>
            <div className="mb-4 flex items-center justify-end">
              <Button
                label="All Products"
                variant="primary"
                url="/admin/products"
              />
            </div>

            <div className="mb-6 flex justify-center">
              <form
                className="flex flex-col gap-4 border-2 border-gray-200 px-20 py-4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="title" className="text-base">
                    Title
                  </label>
                  <TextField
                    name="title"
                    id="title"
                    placeholder="Title"
                    type="text"
                    value={title}
                    onChange={setTitle}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="description" className="text-base">
                    Description
                  </label>
                  <textarea
                    className="w-full border-2 border-yellow-700 px-4 py-2"
                    name="description"
                    id="description"
                    rows={3}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="price" className="text-base">
                    Price
                  </label>
                  <TextField
                    name="price"
                    id="price"
                    placeholder="Price"
                    type="text"
                    value={String(price)}
                    onChange={setPrice}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="img" className="text-base">
                    Image
                  </label>
                  <TextField
                    name="img"
                    id="img"
                    placeholder="Image URL"
                    type="text"
                    value={image}
                    onChange={setImage}
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="slug" className="text-base">
                    Slug
                  </label>
                  <TextField
                    name="slug"
                    id="slug"
                    placeholder="Slug"
                    type="text"
                    value={slug}
                    onChange={setSlug}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="primary" label="Save" type="submit" />
                  <Button
                    variant="default"
                    label="Cancel"
                    url="/admin/products"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
