import ProductCard from "@/components/Card/ProductCard";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import Button from "@/components/Button/Button";
import Pagination from "@/components/Pagination/Pagination";
import AdminLayout from "@/components/Layout/AdminLayout";
import { useRouter } from "next/router";
import { deleteProduct } from "@/lib/productUtils";
import { useAuthNavigate } from "@/hooks/authHook";
import { useProducts } from "@/hooks/productHook";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";
import { GetProductsApiResult } from "@/types/ProductsApiResults";
import Loader from "@/components/Loader/Loader";

export default function AdminProducts() {
  // Check if user is logged in
  useAuthNavigate();

  // Call products api
  const { result, loading } = useProducts();

  return (
    <AdminLayout>
      <section className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <AdminSidebar products />
          {/* Main Content */}
          <div className="col-span-12 md:col-span-9">
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
                {loading ? (
                  <Loader size={"md"} />
                ) : (
                  <AdminProductsContent
                    productsApiResult={result as GetProductsApiResult}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

interface AdminProductsContentProps {
  productsApiResult: GetProductsApiResult;
}

function AdminProductsContent({
  productsApiResult,
}: AdminProductsContentProps) {
  const { page, pages, count, data: products } = productsApiResult;

  const router = useRouter();
  const user = useAppSelector(selectUser) as User;

  // Delete product from database
  const onProductDeleted = async (productId: string) => {
    const {
      error,
      message,
      data: deletedProduct,
    } = await deleteProduct(user, productId);
    if (!error) {
      router.replace("/admin/products");
    }
  };

  return (
    <div>
      <Pagination
        baseURL="/admin/products"
        page={page as number}
        pages={pages as number}
        order={-1}
        count={count as number}
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
  );
}
