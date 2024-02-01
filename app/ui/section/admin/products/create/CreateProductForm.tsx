"use client";

import { useFormState } from "react-dom";
import classNames from "classnames";
import { createProductAction } from "@/app/lib/actions/product.action";
import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import Button from "@/app/ui/actionables/buttons/Button";
import TextInput from "@/app/ui/inputs/TextInput";
import TextArea from "@/app/ui/inputs/TextArea";

interface CreateProductFormProps {
  customClasses?: string;
}

export default function CreateProductForm({
  customClasses,
}: CreateProductFormProps) {
  const classes = classNames("form", customClasses);

  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createProductAction, initialState);

  return (
    <form className={classes} action={dispatch}>
      {/* Title */}
      <TextInput
        name="title"
        id="title"
        type="text"
        label="Title"
        placeholder="Title"
        error={state?.errors?.title?.join(", ")}
      />

      {/* Description */}
      <TextArea
        name="desc"
        id="desc"
        label="Description"
        placeholder="Description"
        error={state?.errors?.desc?.join(", ")}
      />

      {/* Price */}
      <TextInput
        name="price"
        id="price"
        type="number"
        label="Price"
        placeholder="Price"
        error={state?.errors?.price?.join(", ")}
      />

      {/* Image */}
      <TextInput
        name="image"
        id="image"
        type="text"
        label="Image"
        placeholder="Image"
        error={state?.errors?.image?.join(", ")}
      />

      {/* Slug */}
      <TextInput
        name="slug"
        id="slug"
        type="text"
        label="Slug"
        placeholder="Slug"
        error={state?.errors?.slug?.join(", ")}
      />

      <div className="form__group">
        <LinkButton url="/admin/products" label="Cancel" variant="neutral" />
        <PubLishButton />
      </div>
      {state.message && (
        <p className="form__error body-base">{state.message}</p>
      )}
    </form>
  );
}

function PubLishButton() {
  return <Button label="Publish" type="submit" />;
}
