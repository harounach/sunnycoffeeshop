import React, { FormEvent, useEffect, useState } from "react";
import AdminLayout from "@/components/Layout/AdminLayout";
import TextField from "@/components/Form/TextField";
import Button from "@/components/Button/Button";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import { useRouter } from "next/router";
import { updateProduct } from "@/lib/productUtils";
import { useAuthNavigate } from "@/hooks/authHook";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";
import { useSingleProduct } from "@/hooks/productHook";
import Product from "@/types/Product";

export default function AdminEditProduct() {
  const router = useRouter();
  const user = useAppSelector(selectUser) as User;

  // Check if user is logged in
  useAuthNavigate();

  // Call products api
  const { result, loading } = useSingleProduct();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (result) {
      const product = result.data as Product;
      setTitle(product.title);
      setDescription(product.description);
      setPrice(String(product.price));
      setImage(product.image);
      setSlug(product.slug);
    }
  }, [result]);

  const canSubmit =
    Boolean(title) &&
    Boolean(description) &&
    Boolean(price) &&
    Boolean(image) &&
    Boolean(slug);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      try {
        const { message, error: updateError } = await updateProduct(
          user,
          result?.data?._id as string,
          title,
          description,
          Number(price),
          image,
          slug
        );
        if (!updateError) {
          // Navigate to product detail page
          router.replace(`/admin/products/${result?.data?._id as string}`);
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
          <div className="col-span-12 md:col-span-9">
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
