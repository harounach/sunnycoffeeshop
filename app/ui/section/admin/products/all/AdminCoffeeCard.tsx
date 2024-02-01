import Image from "next/image";
import { BsEye, BsPencilFill } from "react-icons/bs";
import DeleteCoffeeButton from "./DeleteCoffeeButton";
import FeaturedButton from "./FeaturedButton";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import { Product } from "@/app/lib/definitions";

export default function AdminCoffeeCard({ product }: { product: Product }) {
  return (
    <div className="admin-coffee-card">
      <Image
        src={product.image}
        width={120}
        height={120}
        alt={product.title}
        className="admin-coffee-card__img"
      />
      <div className="admin-coffee-card__content">
        <div className="admin-coffee-card__header">
          <span className="admin-coffee-card__title title-base">
            {product.title}
          </span>
          <span className="admin-coffee-card__price title-base">{`$${product.price}`}</span>
        </div>
        <div className="admin-coffee-card__footer">
          <DeleteCoffeeButton id={product._id} />
          <ViewCoffeeButton id={product._id} />
          <EditCoffeeButton id={product._id} />
          <FeaturedButton
            productId={product._id}
            isFeatured={product.isFeatured}
          />
        </div>
      </div>
    </div>
  );
}

function EditCoffeeButton({ id }: { id: string }) {
  return (
    <IconLinkButton
      url={`/admin/products/${id}/edit`}
      hasBG
      customClasses="admin-coffee-card__edit"
      title="Edit Coffee"
    >
      <BsPencilFill />
    </IconLinkButton>
  );
}

function ViewCoffeeButton({ id }: { id: string }) {
  return (
    <IconLinkButton
      url={`/admin/products/${id}`}
      hasBG
      customClasses="admin-coffee-card__view"
      title="View Coffee"
    >
      <BsEye />
    </IconLinkButton>
  );
}
