import OrderTable from "@/app/ui/actionables/table/OrderTable";
import AdminOrderTableRow from "@/app/ui/actionables/table/AdminOrderTableRow";
import { ordersData } from "@/app/lib/placeholder-data";

export default function Page() {
  const orderRows = ordersData.map((order) => {
    return <AdminOrderTableRow key={order._id} order={order} />;
  });

  return (
    <section className="admin-orders-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Orders</h1>
          <p className="desc body-base">View and manage your orders</p>
          <div className="admin-orders-page__content">
            <OrderTable>{orderRows}</OrderTable>
          </div>
        </div>
      </section>
    </section>
  );
}
