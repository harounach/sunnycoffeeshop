import { SyntheticEvent, useState } from "react";
import Button from "@/components/Button/Button";
import TextField from "@/components/Form/TextField";
import Layout from "@/components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { saveShippingInfo, selectShippingInfo } from "@/state/cartSlice";
import { useRouter } from "next/router";
import { useAuthNavigate } from "@/hooks/authHook";

export default function Ship() {
  // Check if user is logged in
  useAuthNavigate();

  const router = useRouter();
  const shippingInfo = useAppSelector(selectShippingInfo);
  const dispatch = useAppDispatch();

  const [name, setName] = useState(shippingInfo.name);
  const [email, setEmail] = useState(shippingInfo.email);
  const [street, setStreet] = useState(shippingInfo.street);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [country, setCountry] = useState(shippingInfo.country);
  const [errorMsg, setErrorMsg] = useState("");

  const canSubmit =
    Boolean(name) &&
    Boolean(email) &&
    Boolean(street) &&
    Boolean(city) &&
    Boolean(state) &&
    Boolean(postalCode) &&
    Boolean(country);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (canSubmit) {
      const shippingInfo = {
        name,
        email,
        street,
        city,
        state,
        postalCode,
        country,
      };

      // Save shipping info
      dispatch(saveShippingInfo(shippingInfo));
      // Navigate to payment page
      router.push("/account/payment");
    } else {
      setErrorMsg("All fields are required");
    }
  };

  return (
    <Layout>
      <section className="container mx-auto">
        <h1 className="mb-4 text-center text-2xl">Shipping</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Specify your shipping info to receive your coffee
        </p>

        <div className="flex justify-center">
          <form
            className="inline-flex flex-col gap-4 border-2 border-gray-200 px-20 py-4"
            onSubmit={handleSubmit}
          >
            <div className="text-red-500">{errorMsg}</div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="name" className="text-base">
                Name
              </label>
              <TextField
                name="name"
                id="name"
                placeholder="Name"
                type="text"
                value={name}
                onChange={setName}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email" className="text-base">
                Email
              </label>
              <TextField
                name="email"
                id="email"
                placeholder="Email"
                type="text"
                value={email}
                onChange={setEmail}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="street" className="text-base">
                Street
              </label>
              <TextField
                name="street"
                id="street"
                placeholder="Street"
                type="text"
                value={street}
                onChange={setStreet}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="city" className="text-base">
                City
              </label>
              <TextField
                name="city"
                id="city"
                placeholder="City"
                type="text"
                value={city}
                onChange={setCity}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="state_province" className="text-base">
                State/Province
              </label>
              <TextField
                name="state_province"
                id="state_province"
                placeholder="State/Province"
                type="text"
                value={state}
                onChange={setState}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="postal_code" className="text-base">
                Postal code / Zip code
              </label>
              <TextField
                name="postal_code"
                id="postal_code"
                placeholder="Postal code / Zip code"
                type="text"
                value={postalCode}
                onChange={setPostalCode}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="country" className="text-base">
                Country
              </label>
              <TextField
                name="country"
                id="country"
                placeholder="Country"
                type="text"
                value={country}
                onChange={setCountry}
              />
            </div>

            <Button variant="primary" label="Continue to Payment" />
          </form>
        </div>
      </section>
    </Layout>
  );
}
