import classNames from "classnames";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Button from "@/app/ui/actionables/buttons/Button";

interface CreateProductFormProps {
  customClasses?: string;
}

export default function CreateProductForm({
  customClasses,
}: CreateProductFormProps) {
  const classes = classNames("form", customClasses);

  return (
    <form className={classes}>
      {/* Title */}
      <TextInput name="title" label="Title" id="title" placeholder="Title" />

      {/* Description */}
      <TextArea
        name="desc"
        label="Description"
        id="desc"
        placeholder="Description"
      />

      {/* Price */}
      <TextInput
        name="price"
        label="Price"
        id="price"
        placeholder="Price"
        type="password"
      />

      {/* Image */}
      <TextInput
        name="image"
        label="Image"
        id="image"
        placeholder="Image URL"
        type="password"
      />

      <div className="btn-group">
        <Button label="Cancel" variant="neutral" url="/admin/products" />
        <Button type="submit" label="Create" />
      </div>
    </form>
  );
}
