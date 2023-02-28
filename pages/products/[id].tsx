import { SyntheticEvent, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import IconButton from "@/components/Button/IconButton";
import Layout from "@/components/Layout/Layout";
import { faCartPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as OutlineHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Rating from "@/components/Rating/Rating";
import ReviewCard from "@/components/Card/ReviewCard";
import Link from "next/link";
import Button from "@/components/Button/Button";
import {
  GetProductReviewsApiResult,
  GetSingleProductApiResult,
} from "@/types/ProductsApiResults";
import axios from "axios";
import {
  cartAdded,
  cartDeleted,
  selectCartProductById,
} from "@/state/cartSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import CartProduct from "@/types/CartProduct";
import Review from "@/types/Review";
import { PRODUCTS_API_URL, REVIEWS_API_URL } from "@/lib/urlUtils";
import { CreateReviewApiResult } from "@/types/ReviewsApiResults";

interface ProductProps {
  productApiResult: GetSingleProductApiResult;
}

export default function Product({ productApiResult }: ProductProps) {
  // Get the user name
  let name = "Haroun";
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  // product review rating and count
  const [reviewCount, setReviewCount] = useState(0);
  const [productRating, setProductRating] = useState(0);

  const { data: product, message, error } = productApiResult;
  const [reviews, setReviews] = useState<Array<Review>>([]);
  const dispatch = useAppDispatch();

  const canCreateReview = Boolean(name) && Boolean(rating) && Boolean(comment);

  if (error) {
    return null;
  }

  if (!product) {
    return null;
  }

  const cartProduct = useAppSelector((state) =>
    selectCartProductById(state, product._id)
  );

  const canAddToCart = !cartProduct ? true : false;

  const GET_PRODUCT_REVIEWS_URL = `${PRODUCTS_API_URL}/${product._id}/reviews`;

  // Get reviews for this product
  const getProductReviews = async () => {
    try {
      const response = await axios<GetProductReviewsApiResult>({
        method: "GET",
        url: GET_PRODUCT_REVIEWS_URL,
        validateStatus: () => true,
      });

      const result = response.data;
      const {
        message,
        data: reviews,
        error: reviewsError,
        count,
        rating: averageRating,
      } = result;

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
  const handleSubmitReview = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (canCreateReview) {
      try {
        const data = {
          name,
          rating,
          comment,
          productId: product._id,
        };
        const response = await axios<CreateReviewApiResult>({
          method: "POST",
          url: REVIEWS_API_URL,
          data,
          validateStatus: () => true,
        });
        const result = response.data;
        const { message, error: reviewError } = result;
        if (!reviewError) {
          // Reset review form
          name = "Haroun";
          setRating(5);
          setComment("");
          // Refetch reviews
          await getProductReviews();
        }
      } catch (err) {
        console.log(err);
      }
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
  const onFavoriteAddded = async () => {};

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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  dolore! Reiciendis, consequuntur labore? Doloribus quis sint
                  ipsam? Cupiditate sit culpa inventore dolorem est, consequatur
                  tempore ex quos quibusdam, fugiat laboriosam?
                </p>
              </div>
              <div className="flex justify-end gap-4">
                <IconButton
                  icon={OutlineHeart}
                  size="normal"
                  variant="primary"
                  onClick={onFavoriteAddded}
                />

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
              {reviews.map((review) => {
                return <ReviewCard key={review._id} review={review} />;
              })}
            </div>
          </div>
          <div className="col-span-6">
            <h2 className="mb-4 text-xl">Write a Review:</h2>
            <div className="flex flex-col gap-4 border-2 border-gray-200 p-4">
              <div className="bg-red-100 p-4">
                <p>
                  Please{" "}
                  <Link className="font-medium" href={"/login"}>
                    Login
                  </Link>{" "}
                  to write a review
                </p>
              </div>
              <form onSubmit={handleSubmitReview}>
                <div className="mb-4">
                  <label htmlFor="rating" className="mb-2 block text-lg">
                    Rating
                  </label>
                  <select
                    name="rating"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    defaultValue={5}
                  >
                    <option value="1">1. One</option>
                    <option value="2">2. Two</option>
                    <option value="3">3. Three</option>
                    <option value="4">4. Four</option>
                    <option value="5">5. Five</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="mb-2 block text-lg">
                    Comment
                  </label>
                  <textarea
                    className="w-full border-2 border-yellow-700 px-4 py-2"
                    name="comment"
                    id="comment"
                    rows={3}
                    placeholder="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <Button variant="primary" label="Submit Review" type="submit" />
              </form>
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
  const GET_SINGLE_PRODUCT_URL = `${PRODUCTS_API_URL}/${id}`;
  const response = await fetch(GET_SINGLE_PRODUCT_URL);
  const result = await response.json();

  return {
    props: {
      productApiResult: result,
    },
  };
};
