import OrderTable from "@/app/ui/actionables/table/OrderTable";
import OrderTableRow from "@/app/ui/actionables/table/OrderTableRow";
import { ordersData } from "@/app/lib/placeholder-data";

export default function Page() {
  const orderRows = ordersData.map((order) => {
    return <OrderTableRow key={order._id} order={order} />;
  });

  return (
    <section className="account-orders-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Order History</h1>
          <p className="desc body-base">View your order history</p>
          <div className="account-orders-page__table">
            <OrderTable>{orderRows}</OrderTable>
          </div>
        </div>
      </section>
    </section>
  );
}
