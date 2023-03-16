import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Chip from "@/components/Chip/Chip";
import ChipGroup from "@/components/Chip/ChipGroup";
import Layout from "@/components/Layout/Layout";
import { GetProductsApiResult } from "@/types/ProductsApiResults";
import ShopCard from "@/components/Card/ShopCard";
import { getPaginationURL, PRODUCTS_API_URL } from "@/lib/urlUtils";
import { getProducts } from "@/lib/productUtils";
import DottedPagination from "@/components/Pagination/DottedPagination";

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
            <DottedPagination
              baseURL="/products"
              query={{ page, pages, perpage: 8, order: -1 }}
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ShopProps> = async (
  context
) => {
  const { page, perpage, order, q } = context.query;

  const GET_PRODUCTS_URL = getPaginationURL(PRODUCTS_API_URL, {
    page: page as string,
    perpage: perpage as string,
    order: order as string,
  });

  const result = await getProducts(GET_PRODUCTS_URL);
  return {
    props: {
      productsApiResult: result,
    },
  };
};
