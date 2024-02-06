import PaymentForm from "@/app/ui/section/checkout/payment/PaymentForm";

export default function PaymentPage() {
  return (
    <main className="page" id="content">
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-medium">Payment</h1>
          <p className="desc body-base">Choose your preferred payment method</p>
          <div className="page__form">
            <PaymentForm />
          </div>
        </div>
      </section>
    </main>
  );
}
