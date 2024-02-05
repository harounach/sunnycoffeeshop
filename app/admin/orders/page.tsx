import AdminOrderTable from "@/app/ui/section/admin/orders/AdminOrderTable";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <section className="admin-orders-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Orders</h1>
          <p className="desc body-base">View and manage your orders</p>
          <div className="admin-orders-page__content">
            <AdminOrderTable currentPage={currentPage} />
          </div>
        </div>
      </section>
    </section>
  );
}
