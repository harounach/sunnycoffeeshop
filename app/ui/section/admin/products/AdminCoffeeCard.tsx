import Image from "next/image";
import classNames from "classnames";
import { BsPencilFill, BsTrash3Fill } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { Product } from "@/app/lib/definitions";
import { deleteProduct } from "@/app/lib/database/product/product.mutation";

interface AdminCoffeeCardProps {
  product: Product;
  customClasses?: string;
}

export default function AdminCoffeeCard({
  product,
  customClasses,
}: AdminCoffeeCardProps) {
  const classes = classNames("admin-coffee-card", customClasses);

  const deleteProductWithId = deleteProduct.bind(null, product._id);

  return (
    <div className={classes}>
      <Image
        src={product.image}
        width={152}
        height={152}
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
          <IconButton
            url={`/admin/products/${product._id}/edit`}
            hasBG
            customClasses="admin-coffee-card__edit"
          >
            <BsPencilFill />
          </IconButton>
          <form action={deleteProductWithId}>
            <IconButton hasBG customClasses="admin-coffee-card__remove">
              <BsTrash3Fill />
            </IconButton>
          </form>
        </div>
      </div>
    </div>
  );
}
