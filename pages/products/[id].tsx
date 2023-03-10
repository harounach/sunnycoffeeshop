import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import IconButton from "@/components/Button/IconButton";
import Layout from "@/components/Layout/Layout";
import {
  faCartPlus,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as OutlineHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Rating from "@/components/Rating/Rating";
import ReviewCard from "@/components/Card/ReviewCard";
import Link from "next/link";
import { GetSingleProductApiResult } from "@/types/ProductsApiResults";
import {
  cartAdded,
  cartDeleted,
  selectCartProductById,
} from "@/state/cartSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import CartProduct from "@/types/CartProduct";
import Review from "@/types/Review";
import {
  addUserFavoriteProduct,
  deleteUserFavoriteProduct,
  isProductInFavorite,
} from "@/lib/userUtils";
import { selectUser } from "@/state/userSlice";
import ReviewForm from "@/components/Form/ReviewForm";
import { getSingleProduct } from "@/lib/productUtils";
import { createReview, getReviews } from "@/lib/reviewUtils";
import User from "@/types/User";

interface ProductProps {
  productApiResult: GetSingleProductApiResult;
}

export default function Product({ productApiResult }: ProductProps) {
  // Get the user name
  const user = useAppSelector(selectUser) as User;

  // product review rating and count
  const [reviewCount, setReviewCount] = useState(0);
  const [productRating, setProductRating] = useState(0);

  const { data: product, message, error } = productApiResult;
  const [reviews, setReviews] = useState<Array<Review>>([]);
  const dispatch = useAppDispatch();

  if (error) {
    return null;
  }

  if (!product) {
    return null;
  }

  const [isFavored, setIsFavored] = useState(
    isProductInFavorite(user?._id as string, product)
  );

  const cartProduct = useAppSelector((state) =>
    selectCartProductById(state, product._id)
  );

  const canAddToCart = !cartProduct ? true : false;

  // Get reviews for this product
  const getProductReviews = async () => {
    try {
      const {
        message,
        data: reviews,
        error: reviewsError,
        count,
        rating: averageRating,
      } = await getReviews(product._id);

      if (reviews) {
        setReviews(reviews);
        setReviewCount(count as number);
        setProductRating(averageRating as number);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductReviews();
  }, []);

  // Create new review for this product
  const onReviewCreated = async (
    name: string,
    rating: number,
    comment: string
  ) => {
    try {
      const { message, error: reviewError } = await createReview(
        user,
        name,
        rating,
        comment,
        product._id
      );
      if (!reviewError) {
        // Refetch reviews
        await getProductReviews();
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Add product to the cart
  const onCartAdded = async () => {
    const cartProduct = { ...product, qty: 1 } as CartProduct;
    dispatch(cartAdded(cartProduct));
  };

  const onCartDeleted = () => {
    dispatch(cartDeleted(product._id));
  };

  // Add product to favorites
  const onFavoriteAdded = async () => {
    try {
      const { error: addFavoriteError } = await addUserFavoriteProduct(
        user,
        product._id
      );
      if (!addFavoriteError) {
        // refresh the page
        setIsFavored(true);
      }
    } catch (err) {}
  };

  // Delete product from favorite
  const onFavoriteDeleted = async () => {
    try {
      const { error: deleteFavoriteError } = await deleteUserFavoriteProduct(
        user,
        product._id
      );
      if (!deleteFavoriteError) {
        // refresh the page
        setIsFavored(false);
      }
    } catch (err) {}
  };

  return (
    <Layout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">{product.title}</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Customize your coffee
        </p>
        <div className="mb-6 grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <div className="flex justify-center">
              <Image
                src={product.image}
                width={300}
                height={200}
                alt={product.title}
              />
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex flex-col gap-4 pr-48">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium">{product.title}</h2>
                <h3 className="text-xl font-medium">{`$${product.price}`}</h3>
              </div>
              <div className="flex items-center gap-2">
                <Rating value={productRating} />
                <span className="text-neutral-500">{`(${reviewCount})`}</span>
              </div>
              <div>
                <p className="text-base text-neutral-500">
                  {product.description}
                </p>
              </div>
              <div className="flex justify-end gap-4">
                {isFavored ? (
                  <IconButton
                    icon={faHeart}
                    size="normal"
                    variant="primary"
                    onClick={onFavoriteDeleted}
                  />
                ) : (
                  <IconButton
                    icon={OutlineHeart}
                    size="normal"
                    variant="primary"
                    onClick={onFavoriteAdded}
                  />
                )}

                {canAddToCart ? (
                  <IconButton
                    icon={faCartPlus}
                    size="normal"
                    variant="primary"
                    onClick={onCartAdded}
                  />
                ) : (
                  <IconButton
                    icon={faXmark}
                    size="normal"
                    variant="danger"
                    onClick={onCartDeleted}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <h2 className="mb-4 text-xl">Reviews:</h2>
            <div className="flex flex-col gap-2">
              {reviews.length === 0 && <div>No Reviews</div>}
              {reviews?.map((review) => {
                return <ReviewCard key={review._id} review={review} />;
              })}
            </div>
          </div>
          <div className="col-span-6">
            <h2 className="mb-4 text-xl">Write a Review:</h2>
            <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
              <div className="bg-red-100 p-4">
                {/* TODO: show the review form when logged in only */}
                <p>
                  Please{" "}
                  <Link className="font-medium" href={"/login"}>
                    Login
                  </Link>{" "}
                  to write a review
                </p>
              </div>
              <ReviewForm createReview={onReviewCreated} user={user} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ProductProps> = async (
  context
) => {
  const id = context.params?.id as string;
  const result = await getSingleProduct(id);

  return {
    props: {
      productApiResult: result,
    },
  };
};
