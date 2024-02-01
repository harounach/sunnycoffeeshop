import classNames from "classnames";
import { BsPencilFill } from "react-icons/bs";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import PlaceOrderItem from "./PlaceOrderItem";
import { cartItemsData as items } from "@/app/lib/placeholder-data";
import { useCartStore } from "@/app/lib/store/cart";

interface PlaceOrderCartItemsListProps {
  customClasses?: string;
}

export default function PlaceOrderCartItemsList({
  customClasses,
}: PlaceOrderCartItemsListProps) {
  const classes = classNames("content-card", customClasses);

  // TODO: remember to use real data
  // const items = useCartStore(state => state.items);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Items</h3>
        <IconLinkButton
          url="/cart"
          color="primary"
          hasBG
          customClasses="content-card__btn"
        >
          <BsPencilFill />
        </IconLinkButton>
      </div>
      <div className="content-card__content">
        {items.map((item) => {
          return <PlaceOrderItem key={item.product._id} cartItem={item} />;
        })}
      </div>
    </div>
  );
}
