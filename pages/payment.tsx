import Button from "@/components/Button/Button";
import Layout from "@/components/Layout/Layout";

export default function Payment() {
  return (
    <Layout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">Payment Method</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Choose your preferred payment method
        </p>

        <div className="flex justify-center">
          <form className="inline-flex flex-col gap-4 border-2 border-gray-200 px-20 py-4">
            <div className="flex gap-2">
              <input
                className="accent-yellow-700"
                type="radio"
                name="payment_method"
                value={"paypal"}
                id="paypal"
              />
              <label htmlFor="paypal" className="text-base">
                PayPal
              </label>
            </div>

            <div className="flex gap-2">
              <input
                className="accent-yellow-700"
                type="radio"
                name="payment_method"
                value={"credit_card"}
                id="credit_card"
              />
              <label htmlFor="credit_card" className="text-base">
                Credit Card
              </label>
            </div>

            <Button label="Continue to Place Order" />
          </form>
        </div>
      </section>
    </Layout>
  );
}
