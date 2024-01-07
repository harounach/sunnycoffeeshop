import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import CoffeeContent from "@/app/ui/section/CoffeeContent";
import ReviewList from "@/app/ui/section/ReviewList";
import WriteReview from "@/app/ui/inputs/WriteReview";
import { products } from "@/app/lib/placeholder-data";

export default function Page({ params }: { params: { id: string } }) {
  const coffeeProduct = products.find((product) => product._id === params.id);
  return (
    <div>
      <Header />
      <main className="product-page" id="content">
        <section className="product-page__coffee section section--page">
          <div className="container">
            <h1 className="title title-large">{coffeeProduct?.title}</h1>
            <p className="desc body-base">Customize your coffee</p>
            <CoffeeContent product={coffeeProduct!} customClasses="" />
          </div>
        </section>
        <section className="product-page__review section">
          <div className="container">
            <div className="product-page__review-grid">
              <WriteReview />
              <ReviewList />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
