import classNames from "classnames";
import TextInput from "./TextInput";
import Button from "@/app/ui/actionables/buttons/Button";

interface ShippingFormProps {
  customClasses?: string;
}

export default function ShippingForm({ customClasses }: ShippingFormProps) {
  const classes = classNames("form", customClasses);

  return (
    <form className={classes}>
      {/* First name */}
      <TextInput
        name="first_name"
        label="First name"
        id="first_name"
        placeholder="First name"
      />

      {/* Last name */}
      <TextInput
        name="last_name"
        label="Last name"
        id="last_name"
        placeholder="Last name"
      />

      {/* Email */}
      <TextInput
        name="email"
        label="Email"
        id="email"
        placeholder="Email"
        type="email"
      />

      {/* Street */}
      <TextInput
        name="street"
        label="Street"
        id="street"
        placeholder="Street"
      />

      {/* City */}
      <TextInput name="city" label="City" id="city" placeholder="City" />

      {/* State */}
      <TextInput name="state" label="State" id="state" placeholder="State" />

      {/* Zip code */}
      <TextInput
        name="zip_code"
        label="Zip code"
        id="zip_code"
        placeholder="Zip code"
      />

      {/* Country */}
      <TextInput
        name="country"
        label="Country"
        id="country"
        placeholder="Country"
      />

      <Button url="/account/shipping" label="Proceed to Payment" />
    </form>
  );
}
