"use client";

import { useFormState } from "react-dom";
import classNames from "classnames";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Button from "@/app/ui/actionables/buttons/Button";
import { Product } from "@/app/lib/definitions";
import { updateProduct } from "@/app/lib/database/product/product.mutation";

interface EditProductFormProps {
  product: Product;
  customClasses?: string;
}

export default function EditProductForm({
  product,
  customClasses,
}: EditProductFormProps) {
  const classes = classNames("form", customClasses);

  const initialState = { message: "", errors: {} };
  const updateProductWithId = updateProduct.bind(null, product._id);
  const [state, dispatch] = useFormState(updateProductWithId, initialState);

  return (
    <form className={classes} action={dispatch}>
      {/* Title */}
      <TextInput
        name="title"
        label="Title"
        id="title"
        placeholder="Title"
        defaultValue={product.title}
        error={state?.errors?.title?.join(", ")}
      />

      {/* Description */}
      <TextArea
        name="desc"
        label="Description"
        id="desc"
        placeholder="Description"
        defaultValue={product.desc}
        error={state?.errors?.desc?.join(", ")}
      />

      {/* Price */}
      <TextInput
        name="price"
        label="Price"
        id="price"
        placeholder="Price"
        type="number"
        defaultValue={product.price}
        error={state.errors?.price?.join(", ")}
      />

      {/* Image */}
      <TextInput
        name="image"
        label="Image"
        id="image"
        placeholder="Image URL"
        defaultValue={product.image}
        error={state.errors?.image?.join(", ")}
      />

      {/* Slug */}
      <TextInput
        name="slug"
        label="Slug"
        id="slug"
        placeholder="Slug"
        defaultValue={product.slug}
        error={state.errors?.slug?.join(", ")}
      />

      <div className="btn-group">
        <Button label="Cancel" variant="neutral" url="/admin/products" />
        <Button type="submit" label="Publish" />
      </div>
    </form>
  );
}
