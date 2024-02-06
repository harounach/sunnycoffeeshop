import ShippingForm from "@/app/ui/section/checkout/shipping/ShippingForm";

export default function ShippingPage() {
  return (
    <main className="page" id="content">
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-medium">Shipping</h1>
          <p className="desc body-base">
            Specify your shipping info to receive your coffee
          </p>
          <div className="page__form">
            <ShippingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
