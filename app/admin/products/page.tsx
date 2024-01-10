import AdminCoffeeListCard from "@/app/ui/cards/AdminCoffeeListCard";
import { products } from "@/app/lib/placeholder-data";

export default function Page() {
  return (
    <section className="admin-products-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Products</h1>
          <p className="desc body-base">View and manage your products</p>
          <div className="admin-products-page__content">
            <AdminCoffeeListCard products={products} />
          </div>
        </div>
      </section>
    </section>
  );
}
