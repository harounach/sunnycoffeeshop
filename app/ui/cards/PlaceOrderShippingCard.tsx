import classNames from "classnames";
import { BsPencilFill } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";

interface PlaceOrderShippingCardProps {
  customClasses?: string;
}

export default function PlaceOrderShippingCard({
  customClasses,
}: PlaceOrderShippingCardProps) {
  const classes = classNames("order-card", customClasses);

  return (
    <div className={classes}>
      <div className="order-card__header">
        <h3 className="title-medium">Shipping</h3>
        <IconButton
          url="/checkout/shipping"
          color="primary"
          hasBG
          customClasses="order-card__btn"
        >
          <BsPencilFill />
        </IconButton>
      </div>
      <div className="order-card__content">
        <div className="order-card__row">
          <span className="order-card__key title-base">Name:</span>
          <span className="order-card__value body-base">John Doe</span>
        </div>
        <div className="order-card__row">
          <span className="order-card__key title-base">Email:</span>
          <span className="order-card__value body-base">johndoe@emai.com</span>
        </div>
        <div className="order-card__row">
          <span className="order-card__key title-base">Address:</span>
          <span className="order-card__value body-base">
            4200 Martin Luther King Boulevard Houston, TX, United States
          </span>
        </div>
      </div>
    </div>
  );
}
