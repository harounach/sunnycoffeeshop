import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import IconButton from "@/components/Button/IconButton";
import Layout from "@/components/Layout/Layout";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Rating from "@/components/Rating/Rating";
import Button from "@/components/Button/Button";
import {
  GetProductReviewsApiResult,
  GetSingleProductApiResult,
} from "@/types/ProductsApiResults";
import axios from "axios";
import Review from "@/types/Review";
import { PRODUCTS_API_URL, REVIEWS_API_URL } from "@/lib/urlUtils";
import { useRouter } from "next/router";
import AdminReviewCard from "@/components/Card/AdminReviewCard";
import AdminLayout from "@/components/Layout/AdminLayout";
import { DeleteReviewApiResult } from "@/types/ReviewsApiResults";

interface AdminProductProps {
  productApiResult: GetSingleProductApiResult;
}

export default function AdminProduct({ productApiResult }: AdminProductProps) {
  const { data: product, message, error } = productApiResult;
  const [reviews, setReviews] = useState<Array<Review>>([]);
  const router = useRouter();

  const reviewsContent = null;

  if (error) {
    return null;
  }

  if (!product) {
    return null;
  }

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
      const { message, data: reviews, error: reviewsError } = result;

      if (reviews) {
        setReviews(reviews);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductReviews();
  }, []);

  // Delete product from database
  const onProductDeleted = async () => {
    const DELETE_PRODUCT_API_URL = `${PRODUCTS_API_URL}/${product._id}`;
    try {
      const response = await axios({
        method: "DELETE",
        url: DELETE_PRODUCT_API_URL,
        validateStatus: () => true,
      });

      const result = response.data;
      const { error, message, data } = result;
      if (!error) {
        router.replace("/admin/products");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Delete product from database
  const onReviewDeleted = async (reviewId: string) => {
    const DELETE_REVIEW_API_URL = `${REVIEWS_API_URL}/${reviewId}`;
    try {
      const response = await axios<DeleteReviewApiResult>({
        method: "DELETE",
        url: DELETE_REVIEW_API_URL,
        validateStatus: () => true,
      });

      const result = response.data;
      const { error, message, data } = result;
      if (!error) {
        // refetch reviews
        await getProductReviews();
      }
    } catch (err) {
      console.log(err);
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
            <h1 className="mb-4 text-center text-2xl">{product.title}</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              Customize your coffee
            </p>
            <div className="mb-4 flex items-center justify-end">
              <Button
                label="All Products"
                variant="primary"
                url="/admin/products"
              />
            </div>
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
                    <Rating value={4.5} />
                    <span className="text-neutral-500">(12)</span>
                  </div>
                  <div>
                    <p className="text-base text-neutral-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut, dolore! Reiciendis, consequuntur labore? Doloribus
                      quis sint ipsam? Cupiditate sit culpa inventore dolorem
                      est, consequatur tempore ex quos quibusdam, fugiat
                      laboriosam?
                    </p>
                  </div>
                  <div className="flex justify-end gap-4">
                    <IconButton
                      icon={faTrash}
                      variant="primaryIcon"
                      size="normal"
                      onClick={onProductDeleted}
                    />
                    <IconButton
                      icon={faPen}
                      variant="primaryIcon"
                      size="normal"
                      url={`/admin/products/edit/${product._id}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8">
                <h2 className="mb-4 text-xl">Reviews:</h2>
                <div className="flex flex-col gap-2">
                  {reviews.length === 0 && <div>No Reviews</div>}
                  {reviews.map((review) => {
                    return (
                      <AdminReviewCard
                        key={review._id}
                        review={review}
                        onReviewDeleted={onReviewDeleted}
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

export const getServerSideProps: GetServerSideProps<AdminProductProps> = async (
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
