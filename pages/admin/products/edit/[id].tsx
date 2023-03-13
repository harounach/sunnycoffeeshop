import React, { SyntheticEvent, useState } from "react";
import { GetServerSideProps } from "next";
import AdminLayout from "@/components/Layout/AdminLayout";
import { GetSingleProductApiResult } from "@/types/ProductsApiResults";
import TextField from "@/components/Form/TextField";
import Button from "@/components/Button/Button";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import { useRouter } from "next/router";
import { getSingleProduct, updateProduct } from "@/lib/productUtils";
import { useAuth } from "@/hooks/authHook";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";

interface AdminEditProductProps {
  productApiResult: GetSingleProductApiResult;
}

export default function AdminEditProduct({
  productApiResult,
}: AdminEditProductProps) {
  const { data: product, error, message } = productApiResult;

  const router = useRouter();
  const user = useAppSelector(selectUser) as User;

  // Check if user is logged in
  useAuth();

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

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (canSubmit) {
      try {
        const { message, error: updateError } = await updateProduct(
          user,
          product._id,
          title,
          description,
          Number(price),
          image,
          slug
        );
        if (!updateError) {
          // Navigate to product detail page
          router.replace(`/admin/products/${product._id}`);
        }
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
              <Button
                label="All Products"
                variant="primary"
                type="button"
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

export const getServerSideProps: GetServerSideProps<
  AdminEditProductProps
> = async (context) => {
  const id = context.params?.id as string;
  const result = await getSingleProduct(id);

  return {
    props: {
      productApiResult: result,
    },
  };
};
