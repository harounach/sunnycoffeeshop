"use client";

import { FormEvent, useState } from "react";
import { redirect } from "next/navigation";
import classNames from "classnames";
import { z } from "zod";
import Button from "@/app/ui/actionables/buttons/Button";
import { useCartStore } from "@/app/lib/store/cart";

interface ShippingFormProps {
  customClasses?: string;
}

const ShippingFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, { message: "Name must be 3 or more characters long" }),

  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email address" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .min(3, { message: "Phone must be 3 or more characters long" }),

  address: z
    .string({
      required_error: "Address is required",
    })
    .min(3, { message: "Address must be 3 or more characters long" }),
});

export default function ShippingForm({ customClasses }: ShippingFormProps) {
  const classes = classNames("form", customClasses);
  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { saveShipping } = useCartStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate form fields using Zod
    const validatedFields = ShippingFormSchema.safeParse({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return;
    }

    saveShipping(validatedFields.data);
    redirect("/checkout/payment");
  };

  return (
    <form className={classes} onSubmit={handleSubmit}>
      {/* Name */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="name">
          Name
        </label>
        <input
          className="text-input__input"
          placeholder="Name"
          type="text"
          name="name"
          id="name"
          required
        />
        <p className="text-input__error body-base"></p>
      </div>

      {/* Email */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="email">
          Email
        </label>
        <input
          className="text-input__input"
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          required
        />
        <p className="text-input__error body-base"></p>
      </div>

      {/* Phone */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="phone">
          Phone
        </label>
        <input
          className="text-input__input"
          placeholder="Phone"
          type="tel"
          name="phone"
          id="phone"
          required
        />
        <p className="text-input__error body-base"></p>
      </div>

      {/* Address */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="address">
          Address
        </label>
        <input
          className="text-input__input"
          placeholder="Address"
          type="text"
          name="address"
          id="address"
          required
        />
        <p className="text-input__error body-base"></p>
      </div>

      <Button label="Proceed to Payment" />
    </form>
  );
}
