import AdminCoffeeList from "@/app/ui/section/admin/products/AdminCoffeeList";
import { fetchProducts } from "@/app/lib/database/product/product.query";

export default async function Page() {
  const allProducts = await fetchProducts();

  return (
    <section className="admin-products-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Products</h1>
          <p className="desc body-base">View and manage your products</p>
          <div className="admin-products-page__content">
            <AdminCoffeeList products={allProducts} />
          </div>
        </div>
      </section>
    </section>
  );
}
