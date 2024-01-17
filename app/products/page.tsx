import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import CoffeeCard from "@/app/ui/cards/CoffeeCard";
import CoffeeFilter from "@/app/ui/inputs/CoffeeFilter";
import Pagination from "@/app/ui/actionables/Pagination";
import { fetchProducts } from "@/app/lib/database/product/product.query";

export default async function Page() {
  const allProducts = await fetchProducts();

  return (
    <div>
      <Header />
      <main className="products-page" id="content">
        <section className="products-page__coffees section section--page">
          <div className="container">
            <h1 className="title title-large">Products page</h1>
            <p className="desc body-base">Shop your favorite taste of coffee</p>
            <CoffeeFilter customClasses="products-page__options" />
            <div className="products-page__coffee-grid coffee-card-grid">
              {allProducts.map((product) => {
                return <CoffeeCard key={product._id} product={product} />;
              })}
            </div>
            <Pagination />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
