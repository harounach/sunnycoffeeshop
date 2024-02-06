import { notFound } from "next/navigation";
import CoffeeContent from "@/app/ui/section/products/CoffeeContent";
import ReviewList from "@/app/ui/section/products/ReviewList";
import WriteReview from "@/app/ui/section/products/WriteReview";
import { fetchSingleProduct } from "@/app/lib/database/product/product.query";
import { auth } from "@/auth";

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const coffeeProduct = await fetchSingleProduct(params.id);
  const session = await auth();
  const name = session?.user?.name ? session?.user?.name : "";
  const email = session?.user?.email ? session?.user?.email : "";

  if (!coffeeProduct) {
    notFound();
  }

  return (
    <main className="page" id="content">
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">{coffeeProduct?.title}</h1>
          <p className="desc body-base">Customize your coffee</p>
          <CoffeeContent product={coffeeProduct!} />
        </div>
      </section>
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="page__review-grid">
            <WriteReview
              name={name}
              email={email}
              productId={coffeeProduct._id.toString()}
            />
            <ReviewList productId={coffeeProduct._id.toString()} />
          </div>
        </div>
      </section>
    </main>
  );
}
