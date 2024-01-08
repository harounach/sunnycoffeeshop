import classNames from "classnames";
import { BsPencilFill } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import OrderItemCard from "@/app/ui/cards/OrderItemCard";
import { cartProducts } from "@/app/lib/placeholder-data";

interface PlaceOrderItemsCardProps {
  customClasses?: string;
}

export default function PlaceOrderItemsCard({
  customClasses,
}: PlaceOrderItemsCardProps) {
  const classes = classNames("order-card", customClasses);

  return (
    <div className={classes}>
      <div className="order-card__header">
        <h3 className="title-medium">Items</h3>
        <IconButton
          url="/cart"
          color="primary"
          hasBG
          customClasses="order-card__btn"
        >
          <BsPencilFill />
        </IconButton>
      </div>
      <div className="order-card__content">
        {cartProducts.map((product) => {
          return <OrderItemCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
}
