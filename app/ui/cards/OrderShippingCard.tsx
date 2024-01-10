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
  const classes = classNames("content-card", customClasses);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Shipping</h3>
      </div>
      <div className="content-card__content">
        <div className="content-card__row">
          <span className="content-card__key title-base">Name:</span>
          <span className="content-card__value body-base">{`${shipping.first_name} ${shipping.last_name}`}</span>
        </div>
        <div className="content-card__row">
          <span className="content-card__key title-base">Email:</span>
          <span className="content-card__value body-base">
            {shipping.email}
          </span>
        </div>
        <div className="content-card__row">
          <span className="content-card__key title-base">Address:</span>
          <span className="content-card__value body-base">
            {/* 4200 Martin Luther King Boulevard Houston, TX, United States */}
            {`${shipping.zip_code} ${shipping.street} ${shipping.city}, ${shipping.state}, ${shipping.country}`}
          </span>
        </div>
      </div>
    </div>
  );
}
