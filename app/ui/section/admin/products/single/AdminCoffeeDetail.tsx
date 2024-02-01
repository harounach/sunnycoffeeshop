import { Product } from "@/app/lib/definitions";
import Rating from "@/app/ui/misc/Rating";
import Image from "next/image";
import DeleteButton from "./DeleteButton";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import { BsPencilFill } from "react-icons/bs";

export default function AdminCoffeeDetail({ product }: { product: Product }) {
  return (
    <div className="coffee-detail">
      <Image
        src={product.image}
        width={420}
        height={360}
        alt={product.title}
        className="coffee-detail__img"
      />

      <div className="coffee-detail__header">
        <h2 className="coffee-detail__title title-medium">{product.title}</h2>
        <h2 className="coffee-detail__price title-medium">
          {`$${product.price}`}
        </h2>
      </div>
      <div className="coffee-detail__rating">
        <Rating value={product.rating} />
        <span className="coffee-detail__count body-base">
          ({product.numReviews})
        </span>
      </div>
      <p className="coffee-detail__desc body-base">{product.desc}</p>
      <div className="coffee-detail__actions">
        <DeleteButton id={product._id} />
        <EditButton id={product._id} />
      </div>
    </div>
  );
}

function EditButton({ id }: { id: string }) {
  return (
    <IconLinkButton
      url={`/admin/products/${id}/edit`}
      hasBG
      customClasses="coffee-detail__btn"
      title="Edit"
    >
      <BsPencilFill />
    </IconLinkButton>
  );
}
