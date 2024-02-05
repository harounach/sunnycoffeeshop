import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import CoffeeList from "../ui/section/shared/CoffeeList";
import Pagination from "@/app/ui/actionables/Pagination";
import Searchbar from "@/app/ui/inputs/Searchbar";
import {
  fetchProductsPages,
} from "@/app/lib/database/product/product.query";

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
            <CoffeeList
              query={query}
              currentPage={currentPage}
              customClasses="products-page__coffee-grid"
            />
            <div className="products-page__pager">
              <Pagination totalPages={totalPages} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
