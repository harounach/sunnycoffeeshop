import CoffeeList from "../ui/section/shared/CoffeeList";
import Pagination from "@/app/ui/actionables/Pagination";
import Searchbar from "@/app/ui/inputs/Searchbar";
import { fetchProductsPages } from "@/app/lib/database/product/product.query";

export default async function ProductsPage({
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
    <main className="page" id="content">
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">Products page</h1>
          <p className="desc body-base">Shop your favorite taste of coffee</p>
          <Searchbar customClasses="page__search-products" />
          <CoffeeList
            query={query}
            currentPage={currentPage}
            customClasses="page__coffee-list"
          />
          <div className="products-page__pager">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </section>
    </main>
  );
}
