import Button from "@/components/Button/Button";
import TextField from "@/components/Form/TextField";
import Layout from "@/components/Layout/Layout";

export default function Ship() {
  return (
    <Layout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">Shipping</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Specify your shipping info to receive your coffee
        </p>

        <div className="flex justify-center">
          <form className="inline-flex flex-col gap-4 border-2 border-gray-200 px-20 py-4">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="first_name" className="text-base">
                First Name
              </label>
              <TextField
                name="first_name"
                id="first_name"
                placeholder="First Name"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="last_name" className="text-base">
                Last Name
              </label>
              <TextField
                name="last_name"
                id="last_name"
                placeholder="Last Name"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email" className="text-base">
                Email
              </label>
              <TextField name="email" id="email" placeholder="Email" />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="street" className="text-base">
                Street
              </label>
              <TextField name="street" id="street" placeholder="Street" />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="city" className="text-base">
                City
              </label>
              <TextField name="city" id="city" placeholder="City" />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="state_province" className="text-base">
                State/Province
              </label>
              <TextField
                name="state_province"
                id="state_province"
                placeholder="State/Province"
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
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label htmlFor="country" className="text-base">
                Country
              </label>
              <TextField name="country" id="country" placeholder="Country" />
            </div>

            <Button label="Continue to Payment" />
          </form>
        </div>
      </section>
    </Layout>
  );
}
