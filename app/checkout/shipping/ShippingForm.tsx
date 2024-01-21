import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";
import { FormEvent } from "react";
import { useCartStore } from "@/app/lib/store/cart";

interface ShippingFormProps {
  customClasses?: string;
}

export default function ShippingForm({ customClasses }: ShippingFormProps) {
  const classes = classNames("form", customClasses);

  const { saveShipping } = useCartStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: Validate shipping form with zod
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
        />
        <p className="text-input__error body-base"></p>
      </div>

      <Button label="Proceed to Payment" />
    </form>
  );
}
