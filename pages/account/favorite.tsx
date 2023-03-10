import Layout from "@/components/Layout/Layout";
import FavoriteCard from "@/components/Card/FavoriteCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { GetUsersFavoriteProductsApiResult } from "@/types/UsersApiResults";
import { GetServerSideProps } from "next";
import { USERS_API_URL } from "@/lib/urlUtils";
import {
  deleteUserFavoriteProduct,
  getUserFavoriteProducts,
} from "@/lib/userUtils";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/authHook";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";

interface FavoriteProps {
  favoriteProductsApiResult: GetUsersFavoriteProductsApiResult;
}

export default function Favorite({ favoriteProductsApiResult }: FavoriteProps) {
  const router = useRouter();
  const user = useAppSelector(selectUser) as User;

  // Check if user is logged in
  useAuth();

  const { data: products, message, error } = favoriteProductsApiResult;

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

            <div className="mb-6 flex flex-col gap-4 border-2 border-gray-200 p-4">
              <h2 className="text-center text-xl font-medium">Items</h2>
              <div className="flex flex-col gap-4">
                {products?.map((product) => {
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
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<FavoriteProps> = async (
  context
) => {
  const { page, perpage, order } = context.query;
  const user = JSON.parse(context.req.cookies.userInfo as string) as User;
  const GET_USER_ORDERS_API_URL = `${USERS_API_URL}/${user._id}/products`;
  const result = await getUserFavoriteProducts(user, GET_USER_ORDERS_API_URL);

  return {
    props: {
      favoriteProductsApiResult: result,
    },
  };
};
