"use client";

import { useFormState } from "react-dom";
import classNames from "classnames";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Button from "@/app/ui/actionables/buttons/Button";
import { createProduct } from "@/app/lib/database/product/product.mutation";

interface CreateProductFormProps {
  customClasses?: string;
}

export default function CreateProductForm({
  customClasses,
}: CreateProductFormProps) {
  const classes = classNames("form", customClasses);

  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createProduct, initialState);

  return (
    <form className={classes} action={dispatch}>
      {/* Title */}
      <TextInput
        name="title"
        label="Title"
        id="title"
        placeholder="Title"
        error={state?.errors?.title?.join(", ")}
      />

      {/* Description */}
      <TextArea
        name="desc"
        label="Description"
        id="desc"
        placeholder="Description"
        error={state?.errors?.desc?.join(", ")}
      />

      {/* Price */}
      <TextInput
        name="price"
        label="Price"
        id="price"
        placeholder="Price"
        type="number"
        error={state.errors?.price?.join(", ")}
      />

      {/* Image */}
      <TextInput
        name="image"
        label="Image"
        id="image"
        placeholder="Image URL"
        error={state.errors?.image?.join(", ")}
      />

      {/* Slug */}
      <TextInput
        name="slug"
        label="Slug"
        id="slug"
        placeholder="Slug"
        error={state.errors?.slug?.join(", ")}
      />

      <div className="btn-group">
        <Button label="Cancel" variant="neutral" url="/admin/products" />
        <Button type="submit" label="Publish" />
      </div>

      <p className="form__error body-base">{state.message}</p>
    </form>
  );
}
