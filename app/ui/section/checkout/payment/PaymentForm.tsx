"use client";

import { FormEvent, useState } from "react";
import { redirect } from "next/navigation";
import classNames from "classnames";
import { z } from "zod";
import Button from "@/app/ui/actionables/buttons/Button";
import Radio from "@/app/ui/inputs/Radio";
import { useCartStore } from "@/app/lib/store/cart";

interface PaymentFormProps {
  customClasses?: string;
}

const PaymentFormSchema = z.object({
  paymentMethod: z.string({
    required_error: "Payment method is required",
  }),
});

type ErrorState = {
  paymentMethod?: string[];
};

export default function PaymentForm({ customClasses }: PaymentFormProps) {
  const classes = classNames("form", customClasses);

  const [error, setError] = useState<ErrorState>();

  const { savePayment } = useCartStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    // Validate form fields using Zod
    const validatedFields = PaymentFormSchema.safeParse({
      paymentMethod: formData.get("payment_method"),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      setError(validatedFields.error.flatten().fieldErrors);
      return;
    }

    // Save payment now
    savePayment(validatedFields.data);
    redirect("/checkout/placeorder");
  };

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <div className="radio-group">
        {/* PayPal */}
        <Radio
          name="payment_method"
          id="paypal"
          label="PayPal"
          value="paypal"
        />

        {/* Credit Card */}
        <Radio
          name="payment_method"
          id="credit_card"
          label="Credit Card"
          value="credit_card"
        />

        {/* In Person */}
        <Radio
          name="payment_method"
          id="in_person"
          label="In Person"
          value="in_person"
        />
      </div>

      {error?.paymentMethod && (
        <p className="form__error">{error?.paymentMethod}</p>
      )}

      <Button type="submit" label="Continue to Place Order" />
    </form>
  );
}
