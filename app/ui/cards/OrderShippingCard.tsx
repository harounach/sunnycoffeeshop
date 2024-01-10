import classNames from "classnames";
import { Shipping } from "@/app/lib/definitions";

interface OrderShippingCardProps {
  shipping: Shipping;
  customClasses?: string;
}

export default function OrderShippingCard({
  shipping,
  customClasses,
}: OrderShippingCardProps) {
  const classes = classNames("order-card", customClasses);

  return (
    <div className={classes}>
      <div className="order-card__header">
        <h3 className="title-medium">Shipping</h3>
      </div>
      <div className="order-card__content">
        <div className="order-card__row">
          <span className="order-card__key title-base">Name:</span>
          <span className="order-card__value body-base">{`${shipping.first_name} ${shipping.last_name}`}</span>
        </div>
        <div className="order-card__row">
          <span className="order-card__key title-base">Email:</span>
          <span className="order-card__value body-base">{shipping.email}</span>
        </div>
        <div className="order-card__row">
          <span className="order-card__key title-base">Address:</span>
          <span className="order-card__value body-base">
            {/* 4200 Martin Luther King Boulevard Houston, TX, United States */}
            {`${shipping.zip_code} ${shipping.street} ${shipping.city}, ${shipping.state}, ${shipping.country}`}
          </span>
        </div>
      </div>
    </div>
  );
}
