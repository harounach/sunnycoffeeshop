import { SyntheticEvent, useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import Button from "@/components/Button/Button";
import Layout from "@/components/Layout/Layout";
import { useAppDispatch } from "@/state/hooks";
import { savePaymentInfo } from "@/state/cartSlice";

export default function Payment() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const paymentInfo = {
      paymentMethod,
    };
    dispatch(savePaymentInfo(paymentInfo));
  };

  const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPaymentMethod(e.target.value);
  };

  return (
    <Layout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">Payment Method</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Choose your preferred payment method
        </p>

        <div className="flex justify-center">
          <form
            className="inline-flex flex-col gap-4 border-2 border-gray-200 px-20 py-4"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2">
              <input
                className="accent-yellow-700"
                type="radio"
                name="payment_method"
                value={"paypal"}
                checked={paymentMethod === "paypal"}
                onChange={onOptionChange}
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
                checked={paymentMethod === "credit_card"}
                onChange={onOptionChange}
                id="credit_card"
              />
              <label htmlFor="credit_card" className="text-base">
                Credit Card
              </label>
            </div>

            <Button variant="primary" label="Continue to Place Order" />
          </form>
        </div>
      </section>
    </Layout>
  );
}
