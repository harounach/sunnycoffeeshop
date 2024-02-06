import AdminOrderTable from "@/app/ui/section/admin/orders/AdminOrderTable";

export default async function OrdersPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">Orders</h1>
          <p className="desc body-base">View and manage your orders</p>
          <AdminOrderTable currentPage={currentPage} />
        </div>
      </section>
    </>
  );
}
