"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import classNames from "classnames";
import { Product } from "@/app/lib/definitions";
import { updateProductAction } from "@/app/lib/actions/product";

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
      <div className="text-input">
        <label className="label text-input__label" htmlFor="title">
          Title
        </label>
        <input
          className="text-input__input"
          placeholder="Title"
          type="text"
          name="title"
          id="title"
          defaultValue={product.title}
        />
        {state?.errors?.title && (
          <p className="text-input__error body-base">
            {state?.errors?.title?.join(", ")}
          </p>
        )}
      </div>

      {/* Description */}
      <div className="text-area">
        <label className="label text-area__label" htmlFor="desc">
          Description
        </label>
        <textarea
          className="text-area__area"
          name="desc"
          id="desc"
          cols={30}
          rows={5}
          placeholder="Description"
          defaultValue={product.desc}
        ></textarea>
        {state?.errors?.desc && (
          <p className="text-area__error body-base">
            {state?.errors?.desc?.join(", ")}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="price">
          Price
        </label>
        <input
          className="text-input__input"
          placeholder="Price"
          type="number"
          name="price"
          id="price"
          defaultValue={product.price}
        />
        {state.errors?.price && (
          <p className="text-input__error body-base">
            {state.errors?.price?.join(", ")}
          </p>
        )}
      </div>

      {/* Image */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="image">
          Image
        </label>
        <input
          className="text-input__input"
          placeholder="Image"
          type="text"
          name="image"
          id="image"
          defaultValue={product.image}
        />
        {state.errors?.image && (
          <p className="text-input__error body-base">
            {state.errors?.image?.join(", ")}
          </p>
        )}
      </div>

      {/* Slug */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="slug">
          Slug
        </label>
        <input
          className="text-input__input"
          placeholder="Slug"
          type="text"
          name="slug"
          id="slug"
          defaultValue={product.slug}
        />
        {state.errors?.slug && (
          <p className="text-input__error body-base">
            {state.errors?.slug?.join(", ")}
          </p>
        )}
      </div>

      <div className="btn-group">
        <Link href="/admin/products" className="btn btn--neutral">
          Cancel
        </Link>
        <button className="btn" type="submit">
          Publish
        </button>
      </div>
      {state.message && (
        <p className="form__error body-base">{state.message}</p>
      )}
    </form>
  );
}
