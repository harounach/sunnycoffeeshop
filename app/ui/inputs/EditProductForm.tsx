import classNames from "classnames";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Button from "@/app/ui/actionables/buttons/Button";

interface EditProductFormProps {
  customClasses?: string;
}

export default function EditProductForm({
  customClasses,
}: EditProductFormProps) {
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
        type="number"
      />

      {/* Image */}
      <TextInput
        name="image"
        label="Image"
        id="image"
        placeholder="Image URL"
      />

      <div className="btn-group">
        <Button label="Cancel" variant="neutral" url="/admin/products" />
        <Button type="submit" label="Publish" />
      </div>
    </form>
  );
}
