import Image from "next/image";
import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";
import { OrderItem, Payment, Shipping, Summary } from "@/app/lib/definitions";
import { ordersData } from "@/app/lib/placeholder-data";
import { getSummary } from "@/app/lib/utils/summary";

export default function Page({ params }: { params: { id: string } }) {
  const order = ordersData.find((order) => order._id === params.id);
  const summary = getSummary(order!.items);

  return (
    <section className="account-order-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Order</h1>
          <p className="desc body-base">Review order ({order!._id})</p>

          <div className="account-order-page__content">
            <OrderSummary
              summary={summary}
              customClasses="account-order-page__summary"
            />
            <OrderShippingCard shipping={order!.shipping} />
            <OrderPaymentCard payment={order!.payment} />
            <OrderItemsList orderItems={order!.items} />
          </div>
        </div>
      </section>
    </section>
  );
}

// OrderSummary

interface OrderSummaryProps {
  summary: Summary;
  customClasses?: string;
}

function OrderSummary({ summary, customClasses }: OrderSummaryProps) {
  const classes = classNames("summary", customClasses);

  return (
    <div className={classes}>
      <h2 className="summary__header title-medium">Summary</h2>
      <div className="summary__content">
        <div className="summary__row">
          <span className="summary__key body-base">Items</span>
          <span className="summary__value body-base">{summary.count}</span>
        </div>
        <div className="summary__row">
          <span className="summary__key body-base">Subtotal</span>
          <span className="summary__value body-base">${summary.subtotal}</span>
        </div>
        <div className="summary__row">
          <span className="summary__key body-base">Shipping</span>
          <span className="summary__value body-base">Free</span>
        </div>
        <div className="summary__row">
          <span className="summary__key body-base">Tax</span>
          <span className="summary__value body-base">${summary.tax}</span>
        </div>
        <div className="summary__row">
          <span className="summary__key body-large large">Total</span>
          <span className="summary__value body-large large">
            ${summary.total}
          </span>
        </div>
        <Button
          url="/account/orders"
          label="Pay Now"
          customClasses="summary__btn"
        />
      </div>
    </div>
  );
}

// OrderShippingCard

interface OrderShippingCardProps {
  shipping: Shipping;
  customClasses?: string;
}

function OrderShippingCard({
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

// OrderPaymentCard

interface OrderPaymentCardProps {
  payment: Payment;
  customClasses?: string;
}

function OrderPaymentCard({ payment, customClasses }: OrderPaymentCardProps) {
  const classes = classNames("content-card", customClasses);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Payment</h3>
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

// OrderItemsList

interface OrderItemsListProps {
  orderItems: Array<OrderItem>;
  customClasses?: string;
}

function OrderItemsList({ orderItems, customClasses }: OrderItemsListProps) {
  const classes = classNames("content-card", customClasses);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Items</h3>
      </div>
      <div className="content-card__content">
        {orderItems.map((orderItem) => {
          return (
            <OrderItemCard key={orderItem.product._id} orderItem={orderItem} />
          );
        })}
      </div>
    </div>
  );
}

// OrderItemCard

interface OrderItemCardProps {
  orderItem: OrderItem;
  customClasses?: string;
}

function OrderItemCard({ orderItem, customClasses }: OrderItemCardProps) {
  const classes = classNames("order-item-card", customClasses);

  return (
    <div className={classes}>
      <Image
        src={orderItem.product.image}
        width={100}
        height={100}
        alt={orderItem.product.title}
        className="order-item-card__img"
      />
      <div className="order-item-card__content">
        <span className="order-item-card__title title-base">
          {orderItem.product.title}
        </span>
        <span className="order-item-card__price title-base">{`$${orderItem.product.price}`}</span>
        <span className="order-item-card__qty body-base">
          ({orderItem.qty})
        </span>
      </div>
    </div>
  );
}
