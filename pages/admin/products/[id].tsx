import { useEffect, useState } from "react";
import IconButton from "@/components/Button/IconButton";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Rating from "@/components/Rating/Rating";
import Button from "@/components/Button/Button";
import Review from "@/types/Review";
import { useRouter } from "next/router";
import AdminReviewCard from "@/components/Card/AdminReviewCard";
import AdminLayout from "@/components/Layout/AdminLayout";
import { deleteProduct } from "@/lib/productUtils";
import { deleteReview, getReviews } from "@/lib/reviewUtils";
import { useAuthNavigate } from "@/hooks/authHook";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";
import { useSingleProduct } from "@/hooks/productHook";
import Product from "@/types/Product";
import Loader from "@/components/Loader/Loader";

export default function AdminSingleProduct() {
  // Check if user is logged in
  useAuthNavigate();

  // Call products api
  const { result, loading } = useSingleProduct();

  return (
    <AdminLayout>
      <section className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <AdminSidebar products />
          {/* Main Content */}
          <div className="col-span-12 md:col-span-9">
            <h1 className="mb-4 text-center text-2xl">{result?.data?.title}</h1>
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

            {loading ? (
              <Loader size={"md"} />
            ) : (
              <AdminSingleProductContent product={result?.data as Product} />
            )}
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

interface AdminSingleProductContentProps {
  product: Product;
}

function AdminSingleProductContent({
  product,
}: AdminSingleProductContentProps) {
  // Get logged in user
  const user = useAppSelector(selectUser) as User;

  const [reviews, setReviews] = useState<Array<Review>>([]);
  // product review rating and count
  const [reviewCount, setReviewCount] = useState(0);
  const [productRating, setProductRating] = useState(0);
  const router = useRouter();

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
    // Get reviews for this product
    const fetchReviews = async () => {
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
    fetchReviews();
  }, [product]);

  // Delete product from database
  const onProductDeleted = async () => {
    try {
      const { error, message, data } = await deleteProduct(user, product._id);
      if (!error) {
        router.replace("/admin/products");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Delete product from database
  const onReviewDeleted = async (reviewId: string) => {
    try {
      const { error, message, data } = await deleteReview(user, reviewId);
      if (!error) {
        // refetch reviews
        await getProductReviews();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="mb-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-center">
            <Image
              src={product.image as string}
              width={300}
              height={200}
              alt={product.title as string}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col gap-4 pr-0 md:pr-48">
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
        <div className="col-span-12 md:col-span-8">
          <h2 className="mb-4 text-xl">Reviews:</h2>
          <div className="flex flex-col gap-2">
            {reviews.length === 0 && <div>No Reviews</div>}
            {reviews?.map((review) => {
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
  );
}
