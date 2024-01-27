"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod";
import { ProductModel } from "@/app/lib/database/models";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "@/app/lib/database/product/product.mutation";

const FormSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be 3 or more characters long" }),

  desc: z
    .string({
      invalid_type_error: "Please type a description.",
    })
    .min(3, { message: "Description must be 3 or more characters long" }),

  price: z.coerce
    .number()
    .gt(0, { message: "Please enter a price greater than $0." }),

  image: z
    .string({
      invalid_type_error: "Please type an image URL.",
    })
    .min(3, { message: "Image must be 3 or more characters long" }),

  slug: z
    .string({
      invalid_type_error: "Please type a slug.",
    })
    .min(3, { message: "Slug must be 3 or more characters long" }),
});

export type State = {
  errors?: {
    title?: string[];
    desc?: string[];
    price?: string[];
    image?: string[];
    slug?: string[];
  };
  message?: string | null;
};

const CreateProductSchema = FormSchema;
const UpdateProductSchema = FormSchema;

/**
 * Create new product
 */
export async function createProductAction(
  prevState: State,
  formData: FormData,
) {
  // Validate form fields using Zod
  const validatedFields = CreateProductSchema.safeParse({
    title: formData.get("title"),
    desc: formData.get("desc"),
    price: formData.get("price"),
    image: formData.get("image"),
    slug: formData.get("slug"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Product.",
    };
  }

  const { title, desc, price, image, slug } = validatedFields.data;

  try {
    // Create product in database
    await createProduct(title, desc, price, image, slug);
  } catch (err) {
    return {
      message: "Database Error: Failed to Create Product.",
    };
  }

  // Revalidate the cache for the admin products page and redirect the user.
  revalidatePath("/admin/products");
  redirect("/admin/products");
}

/**
 * Update a product
 */
export async function updateProductAction(
  id: string,
  prevState: State,
  formData: FormData,
) {
  // Validate form fields using Zod
  const validatedFields = UpdateProductSchema.safeParse({
    title: formData.get("title"),
    desc: formData.get("desc"),
    price: formData.get("price"),
    image: formData.get("image"),
    slug: formData.get("slug"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Product.",
    };
  }

  const { title, desc, price, image, slug } = validatedFields.data;

  try {
    // Update product in database
    await updateProduct(id, title, desc, price, image, slug);
  } catch (err) {
    return {
      message: "Database Error: Failed to Update Product.",
    };
  }

  // Revalidate the cache for the admin products page and redirect the user.
  revalidatePath("/admin/products");
  redirect("/admin/products");
}

/**
 * Delete a product
 */
export async function deleteProductAction(id: string) {
  try {
    // Delete product in database
    await deleteProduct(id);
    revalidatePath("/admin/products");
    return { message: "Product deleted" };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Product." };
  }
}

/**
 * Mark product as featured
 */
export async function markProductAsFeatured(id: string) {
  try {
    // Find and toggle isFeatured flag
    const productToBeFeatured = await ProductModel.findById(id).exec();
    productToBeFeatured.isFeatured = !productToBeFeatured.isFeatured;
    await productToBeFeatured.save();

    // Update cache
    revalidatePath("/admin/products");

    return { message: "Product is featured" };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Product." };
  }
}
