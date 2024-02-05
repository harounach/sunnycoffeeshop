import AdminCoffeeList from "@/app/ui/section/admin/products/all/AdminCoffeeList";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    page?: string;
  };
}) {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <section className="admin-products-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Products</h1>
          <p className="desc body-base">View and manage your products</p>
          <div className="admin-products-page__content">
            <AdminCoffeeList query={query} currentPage={currentPage} />
          </div>
        </div>
      </section>
    </section>
  );
}
