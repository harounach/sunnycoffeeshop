"use client";

import classNames from "classnames";
import { BsPencilFill } from "react-icons/bs";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
// import { paymentData as payment } from "@/app/lib/placeholder-data";
import { useCartStore } from "@/app/lib/store/cart";

interface PlaceOrderPaymentCardProps {
  customClasses?: string;
}

export default function PlaceOrderPaymentCard({
  customClasses,
}: PlaceOrderPaymentCardProps) {
  const classes = classNames("content-card", customClasses);

  const payment = useCartStore((state) => state.payment);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Payment</h3>
        <IconLinkButton
          url="/checkout/payment"
          color="primary"
          hasBG
          customClasses="content-card__btn"
        >
          <BsPencilFill />
        </IconLinkButton>
      </div>
      <div className="content-card__content">
        <div className="content-card__row">
          <span className="content-card__key title-base">Payment method:</span>
          <span className="content-card__value body-base">
            {payment.paymentMethod}
          </span>
        </div>
      </div>
    </div>
  );
}
