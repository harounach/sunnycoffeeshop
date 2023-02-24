import React, { useState } from "react";
import { GetServerSideProps } from "next";

import AdminLayout from "@/components/Layout/AdminLayout";
import { GetSingleProductApiResult } from "@/types/ProductsApiResults";

import TextField from "@/components/Form/TextField";
import Button from "@/components/Button/Button";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import axios from "axios";
import { PRODUCTS_API_URL } from "@/lib/urlUtils";

interface AdminEditProductProps {
  productApiResult: GetSingleProductApiResult;
}

export default function AdminEditProduct({
  productApiResult,
}: AdminEditProductProps) {
  console.log(productApiResult);
  const { data: product, error, message } = productApiResult;

  if (!product) {
    return null;
  }

  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(String(product.price));
  const [image, setImage] = useState(product.image);
  const [slug, setSlug] = useState(product.slug);

  const canSubmit =
    Boolean(title) &&
    Boolean(description) &&
    Boolean(price) &&
    Boolean(image) &&
    Boolean(slug);

  const UPDATE_PRODUCT_API_URL = `http://localhost:4000/api/products/${product._id}`;

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
          method: "PUT",
          url: UPDATE_PRODUCT_API_URL,
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
          <AdminSidebar products />
          {/* Main Content */}
          <div className="col-span-9">
            <h1 className="mb-4 text-center text-2xl">Edit Product</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              Edit and customize your product
            </p>
            <div className="mb-4 flex items-center justify-end">
              <Button label="All Products" variant="primary" type="submit" />
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
                  />
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

export const AdminEditProductProps: GetServerSideProps<
  AdminEditProductProps
> = async (context) => {
  const id = context.params?.id as string;

  const GET_SINGLE_PRODUCT_URL = `${PRODUCTS_API_URL}/${id}`;
  const response = await fetch(GET_SINGLE_PRODUCT_URL);
  const result = await response.json();

  return {
    props: {
      productApiResult: result,
    },
  };
};
