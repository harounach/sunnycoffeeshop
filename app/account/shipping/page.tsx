import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import ShippingForm from "@/app/ui/inputs/ShippingForm";

export default function Page() {
  return (
    <div>
      <Header />
      <main className="shipping-page" id="content">
        <section className="shipping-page__sect section section--page">
          <div className="container">
            <h1 className="title title-medium">Shipping</h1>
            <p className="desc body-base">
              Specify your shipping info to receive your coffee
            </p>
            <div className="shipping-page__form">
              <form className="form">
                <ShippingForm />
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
