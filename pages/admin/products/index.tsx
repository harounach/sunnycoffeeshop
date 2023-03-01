import { GetServerSideProps } from "next";
import ProductCard from "@/components/Card/ProductCard";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import Button from "@/components/Button/Button";
import {
  DeleteProductApiResult,
  GetProductsApiResult,
} from "@/types/ProductsApiResults";
import { getPaginationURL, PRODUCTS_API_URL } from "@/lib/urlUtils";
import Pagination from "@/components/Pagination/Pagination";
import AdminLayout from "@/components/Layout/AdminLayout";
import axios from "axios";
import { useRouter } from "next/router";

interface AdminProductsProps {
  productsApiResult: GetProductsApiResult;
}

export default function AdminProducts({
  productsApiResult,
}: AdminProductsProps) {
  const { data: products, message, pages, page, count } = productsApiResult;
  const router = useRouter();

  // Delete product from database
  const onProductDeleted = async (productId: string) => {
    const DELETE_PRODUCT_API_URL = `${PRODUCTS_API_URL}/${productId}`;
    const response = await axios<DeleteProductApiResult>({
      method: "DELETE",
      url: DELETE_PRODUCT_API_URL,
      validateStatus: () => true,
    });

    const result = response.data;
    const { error, message, data: deletedProduct } = result;
    if (!error) {
      router.replace("/admin/products");
    }
  };

  return (
    <AdminLayout>
      <section className="container mx-auto mt-6 mb-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <AdminSidebar products />
          {/* Main Content */}
          <div className="col-span-9">
            <h1 className="mb-4 text-center text-2xl">Products</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              View and manage your products
            </p>

            {/* Products */}
            <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium">Items</h2>
                <Button
                  label="Add Product"
                  variant="primary"
                  url="/admin/products/add"
                  type="button"
                />
              </div>
              <div>
                <Pagination
                  baseURL="/admin/products"
                  page={page}
                  pages={pages}
                  order={-1}
                  count={count}
                />
                <div className="flex flex-col gap-4">
                  {products.map((product) => {
                    return (
                      <ProductCard
                        product={product}
                        onProductDeleted={onProductDeleted}
                        key={product._id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export const getServerSideProps: GetServerSideProps<
  AdminProductsProps
> = async (context) => {
  const { page, perpage, order } = context.query;

  const GET_PRODUCTS_URL = getPaginationURL(PRODUCTS_API_URL, {
    page: page as string,
    perpage: perpage as string,
    order: order as string,
  });

  const response = await fetch(GET_PRODUCTS_URL);
  const result = await response.json();

  return {
    props: {
      productsApiResult: result,
    },
  };
};
