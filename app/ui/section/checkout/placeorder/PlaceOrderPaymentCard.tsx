import classNames from "classnames";
import { BsPencilFill } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { Payment } from "@/app/lib/definitions";

interface PlaceOrderPaymentCardProps {
  payment: Payment;
  customClasses?: string;
}

export default function PlaceOrderPaymentCard({
  payment,
  customClasses,
}: PlaceOrderPaymentCardProps) {
  const classes = classNames("content-card", customClasses);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Payment</h3>
        <IconButton
          url="/checkout/payment"
          color="primary"
          hasBG
          customClasses="content-card__btn"
        >
          <BsPencilFill />
        </IconButton>
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
