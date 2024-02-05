import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import CoffeeContent from "@/app/ui/section/products/CoffeeContent";
import ReviewList from "@/app/ui/section/products/ReviewList";
import WriteReview from "@/app/ui/section/products/WriteReview";
import { fetchSingleProduct } from "@/app/lib/database/product/product.query";
import { auth } from "@/auth";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const coffeeProduct = await fetchSingleProduct(params.id);
  const session = await auth();
  const name = session?.user?.name ? session?.user?.name : "";
  const email = session?.user?.email ? session?.user?.email : "";

  if (!coffeeProduct) {
    notFound();
  }

  return (
    <div>
      <Header />
      <main className="product-page" id="content">
        <section className="product-page__coffee section section--page">
          <div className="container">
            <h1 className="title title-large">{coffeeProduct?.title}</h1>
            <p className="desc body-base">Customize your coffee</p>
            <CoffeeContent product={coffeeProduct!} />
          </div>
        </section>
        <section className="product-page__review section">
          <div className="container">
            <div className="product-page__review-grid">
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
      <Footer />
    </div>
  );
}
