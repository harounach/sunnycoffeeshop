import { GetServerSideProps } from "next";
import Chip from "@/components/Chip/Chip";
import ChipGroup from "@/components/Chip/ChipGroup";
import Layout from "@/components/Layout/Layout";
import { SearchProductsApiResult } from "@/types/ProductsApiResults";
import ShopCard from "@/components/Card/ShopCard";
import { getPaginationURL, PRODUCTS_API_URL } from "@/lib/urlUtils";
import { getSearchProducts } from "@/lib/productUtils";
import DottedPagination from "@/components/Pagination/DottedPagination";

interface SearchProps {
  searchApiResult: SearchProductsApiResult;
  searchQuery?: string;
}

export default function Search({ searchApiResult, searchQuery }: SearchProps) {
  const { data: products, message, pages, page } = searchApiResult;

  return (
    <Layout>
      <section className="container mx-auto">
        <h1 className="mb-4 text-center text-2xl">Search</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Products matched for your search: <strong> {searchQuery} </strong>
        </p>

        {/* Sort and Filter */}
        <section className="mb-6 flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h3 className="mb-4 text-lg">Sort by</h3>
            <div>
              <ChipGroup>
                <Chip label="Latest" variant="default" />
                <Chip label="Oldest" variant="default" />
                <Chip label="Price" variant="default" />
              </ChipGroup>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg">Filter by</h3>
            <div>
              <ChipGroup>
                <Chip label="Best Selling" variant="default" />
                <Chip label="Old" variant="default" />
                <Chip label="Price" variant="default" />
              </ChipGroup>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-4">
            {products.map((product) => {
              return <ShopCard product={product} key={product._id} />;
            })}
          </div>
          <div className="mt-6">
            <DottedPagination
              baseURL="/search"
              query={{ page, pages, perpage: 8, order: -1, q: searchQuery }}
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async (
  context
) => {
  const { page, perpage, order, q } = context.query;

  const SEARCH_PRODUCTS_URL = getPaginationURL(PRODUCTS_API_URL, {
    page: page as string,
    perpage: perpage as string,
    order: order as string,
    q: q as string,
  });

  const result = await getSearchProducts(SEARCH_PRODUCTS_URL);

  const search = q ? q : "";

  return {
    props: {
      searchApiResult: result,
      searchQuery: search as string,
    },
  };
};
