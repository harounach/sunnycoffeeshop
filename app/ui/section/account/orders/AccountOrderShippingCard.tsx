import classNames from "classnames";
import { Order } from "@/app/lib/definitions";

interface AccountOrderShippingCardProps {
  order: Order;
  customClasses?: string;
}

export default function AccountOrderShippingCard({
  order,
  customClasses,
}: AccountOrderShippingCardProps) {
  const classes = classNames("content-card", customClasses);

  const shipping = order.shipping;

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Shipping</h3>
      </div>
      <div className="content-card__content">
        <div className="content-card__row">
          <span className="content-card__key title-base">Name:</span>
          <span className="content-card__value body-base">{shipping.name}</span>
        </div>
        <div className="content-card__row">
          <span className="content-card__key title-base">Email:</span>
          <span className="content-card__value body-base">
            {shipping.email}
          </span>
        </div>
        <div className="content-card__row">
          <span className="content-card__key title-base">Phone</span>
          <span className="content-card__value body-base">
            {shipping.phone}
          </span>
        </div>
        <div className="content-card__row">
          <span className="content-card__key title-base">Address:</span>
          <span className="content-card__value body-base">
            {/* 4200 Martin Luther King Boulevard Houston, TX, United States */}
            {shipping.address}
          </span>
        </div>
      </div>
    </div>
  );
}
