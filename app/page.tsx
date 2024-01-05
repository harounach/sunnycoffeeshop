import {
  BsFillHouseHeartFill,
  BsDiagram3Fill,
  BsAwardFill,
} from "react-icons/bs";
import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import Hero from "@/app/ui/section/Hero";
import CoffeeCard from "@/app/ui/cards/CoffeeCard";
import BenefitCard from "@/app/ui/cards/BenefitCard";
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
        <section className="home-page__benefits section">
          <div className="container">
            <h2 className="subtitle title-medium">Benefits of our coffee</h2>
            <p className="desc desc--dimmed body-base">
              Check out our coffee benefits
            </p>
            <div className="benefit-card-grid">
              <BenefitCard
                title="New York Family Owned"
                desc="Our family has taken pride in sourcing, roasting, and brewing the highest-quality coffee for over 12 years in New York City."
                icon={<BsFillHouseHeartFill />}
              />

              <BenefitCard
                title="Ethically Sourced"
                desc="Our specialty coffee beans are traceable back to their farm or cooperative. Our coffee is USDA Organic, Fair Trade & Direct Trade."
                icon={<BsDiagram3Fill />}
              />

              <BenefitCard
                title="Rare & Exceptional Coffees"
                desc="We source exceptional coffees like the Gesha variety from award-winning farms. We offer delicious decaf options."
                icon={<BsAwardFill />}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
