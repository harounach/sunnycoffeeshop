import Hero from "@/app/ui/section/home/Hero";
import FeaturedCoffeeList from "@/app/ui/section/shared/FeaturedCoffeeList";
import Newsletter from "@/app/ui/section/home/Newsletter";
import BenefitList from "@/app/ui/section/home/BenefitList";

export default async function HomePage() {
  return (
    <main className="page" id="content">
      <Hero />
      <section className="section bg-primary-100">
        <div className="container">
          <h2 className="subtitle title-medium">Our Popular Coffee</h2>
          <p className="desc body-base">List of our best selling coffee</p>
          <FeaturedCoffeeList />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="subtitle title-medium">Benefits of our coffee</h2>
          <p className="desc desc--dimmed body-base">
            Check out our coffee benefits
          </p>
          <BenefitList />
        </div>
      </section>
      <section className="section bg-primary-50">
        <div className="container">
          <h2 className="subtitle title-medium">Newsletter</h2>
          <p className="desc desc--dimmed body-base">
            Sign up for our newsletter to receive coffee tips
          </p>
          <Newsletter />
        </div>
      </section>
    </main>
  );
}
