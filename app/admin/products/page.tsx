import AdminCoffeeList from "@/app/ui/section/admin/products/all/AdminCoffeeList";
// import { fetchProducts } from "@/app/lib/database/product/product.query";
import { products } from "@/app/lib/placeholder-data";

export default async function Page() {
  // TODO: remember to use real data
  // const products = await fetchProducts();

  return (
    <section className="admin-products-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Products</h1>
          <p className="desc body-base">View and manage your products</p>
          <div className="admin-products-page__content">
            <AdminCoffeeList products={products} />
          </div>
        </div>
      </section>
    </section>
  );
}
