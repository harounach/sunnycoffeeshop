import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import CoffeeCard from "@/app/ui/section/shared/CoffeeCard";
import CoffeeFilter from "@/app/ui/section/products/CoffeeFilter";
import Pagination from "@/app/ui/actionables/Pagination";
import {
  fetchProducts,
  fetchFilteredProducts,
  fetchProductsPages,
} from "@/app/lib/database/product/product.query";
import Searchbar from "@/app/ui/inputs/Searchbar";
import CoffeeList from "../ui/section/shared/CoffeeList";
// import { products } from "@/app/lib/placeholder-data";

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

  const totalPages = await fetchProductsPages(query);

  return (
    <div>
      <Header />
      <main className="products-page" id="content">
        <section className="products-page__coffees section section--page">
          <div className="container">
            <h1 className="title title-large">Products page</h1>
            <p className="desc body-base">Shop your favorite taste of coffee</p>
            <Searchbar customClasses="products-page__search" />
            {/*<CoffeeFilter customClasses="products-page__options" />*/}
            <CoffeeList
              query={query}
              currentPage={currentPage}
              customClasses="products-page__coffee-grid"
            />
            <Pagination totalPages={totalPages} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
