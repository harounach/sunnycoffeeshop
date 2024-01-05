import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import Hero from "@/app/ui/section/Hero";
import CoffeeCard from "@/app/ui/cards/CoffeeCard";
import { products } from "@/app/lib/placeholder-data";
const favoriteProducts = products.slice(0, 4);

export default function Page() {
  return (
    <div>
      <Header />
      <main className="home-page" id="content">
        <Hero />
        <section className="home-page__featured section">
          <div className="container">
            <h2 className="subtitle title-medium">Our Popular Coffee</h2>
            <p className="desc body-base">List of our best selling coffee</p>
            <div className="coffee-card-grid">
              {favoriteProducts.map((product) => {
                return <CoffeeCard key={product._id} product={product} />;
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
