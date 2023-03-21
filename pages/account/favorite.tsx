import Layout from "@/components/Layout/Layout";
import FavoriteCard from "@/components/Card/FavoriteCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { deleteUserFavoriteProduct } from "@/lib/userUtils";
import { useRouter } from "next/router";
import { useAuthNavigate } from "@/hooks/authHook";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";
import { useFavoriteProducts } from "@/hooks/productHook";

export default function Favorite() {
  const router = useRouter();
  const user = useAppSelector(selectUser) as User;

  // Check if user is logged in
  useAuthNavigate();

  // Call favorite products api
  const { result, loading } = useFavoriteProducts();

  const onFavoriteProductDeleted = async (user: User, productId: string) => {
    try {
      const { error: deleteFavoriteError } = await deleteUserFavoriteProduct(
        user,
        productId
      );
      if (!deleteFavoriteError) {
        // refresh the page
        router.replace("/account/favorite");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <section className="container mx-auto mt-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <Sidebar favorite />
          {/* Main Content */}
          <div className="col-span-9">
            <h1 className="mb-4 text-center text-2xl">Favorites</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              Check out your favorite coffee
            </p>

            {loading ? (
              <div>Loading</div>
            ) : (
              <div className="mb-6 flex flex-col gap-4 border-2 border-gray-200 p-4">
                <h2 className="text-center text-xl font-medium">Items</h2>
                <div className="flex flex-col gap-4">
                  {result?.data?.map((product) => {
                    return (
                      <FavoriteCard
                        product={product}
                        key={product._id}
                        onFavoriteProductDeleted={() =>
                          onFavoriteProductDeleted(user, product._id)
                        }
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
