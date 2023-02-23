import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Chip from "@/components/Chip/Chip";
import ChipGroup from "@/components/Chip/ChipGroup";
import ShopPagination from "@/components/ShopPagination/ShopPagination";
import Layout from "@/components/Layout/Layout";
import { GetProductsApiResult } from "@/types/ProductsApiResults";
import ShopCard from "@/components/Card/ShopCard";
import { getProductsURL } from "@/lib/urlUtils";

interface ShopProps {
  productsApiResult: GetProductsApiResult;
}

export default function Shop({ productsApiResult }: ShopProps) {
  const router = useRouter();

  const { data, message, pages, page } = productsApiResult;

  return (
    <Layout>
      <section className="container mx-auto mt-6">
        <h1 className="mb-4 text-center text-2xl">Shop</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Shop your favorite taste of coffee
        </p>

        {/* Sort and Filter */}
        <section className="mb-6 flex justify-between">
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
          <div className="grid grid-cols-4 gap-x-6 gap-y-8">
            {data.map((product) => {
              return <ShopCard product={product} key={product._id} />;
            })}
          </div>
          <div className="mt-6">
            <ShopPagination page={page} pages={pages} perpage={8} order={-1} />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  productsApiResult: GetProductsApiResult;
}> = async (context) => {
  const { page, perpage, order } = context.query;

  const GET_PRODUCTS_URL = getProductsURL(page, perpage, order);

  const response = await fetch(GET_PRODUCTS_URL);
  const result = await response.json();

  return {
    props: {
      productsApiResult: result,
    },
  };
};
