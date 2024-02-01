"use client";

import { useFormState } from "react-dom";
import classNames from "classnames";
import { Product } from "@/app/lib/definitions";
import { updateProductAction } from "@/app/lib/actions/product.action";
import Button from "@/app/ui/actionables/buttons/Button";
import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import TextInput from "@/app/ui/inputs/TextInput";
import TextArea from "@/app/ui/inputs/TextArea";

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
  const updateProductWithId = updateProductAction.bind(null, product._id);
  const [state, dispatch] = useFormState(updateProductWithId, initialState);

  return (
    <form className={classes} action={dispatch}>
      {/* Title */}
      <TextInput
        name="title"
        id="title"
        type="text"
        label="Title"
        placeholder="Title"
        defaultValue={product.title}
        error={state?.errors?.title?.join(", ")}
      />

      {/* Description */}
      <TextArea
        name="desc"
        id="desc"
        label="Description"
        placeholder="Description"
        defaultValue={product.desc}
        error={state?.errors?.desc?.join(", ")}
      />

      {/* Price */}
      <TextInput
        name="price"
        id="price"
        type="number"
        label="Price"
        placeholder="Price"
        defaultValue={product.price}
        error={state?.errors?.price?.join(", ")}
      />

      {/* Image */}
      <TextInput
        name="image"
        id="image"
        type="text"
        label="Image"
        placeholder="Image"
        defaultValue={product.image}
        error={state?.errors?.image?.join(", ")}
      />

      {/* Slug */}
      <TextInput
        name="slug"
        id="slug"
        type="text"
        label="Slug"
        placeholder="Slug"
        defaultValue={product.slug}
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
