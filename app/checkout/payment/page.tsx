import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import PaymentForm from "@/app/ui/section/checkout/payment/PaymentForm";

export default function Page() {
  return (
    <div>
      <Header />
      <main className="payment-page" id="content">
        <section className="payment-page__sect section section--page">
          <div className="container">
            <h1 className="title title-medium">Payment</h1>
            <p className="desc body-base">
              Choose your preferred payment method
            </p>
            <div className="payment-page__form">
              <PaymentForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
