import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faArrowsToCircle,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout/Layout";
import CoffeeCard from "@/components/CoffeeCard/CoffeeCard";
import TextField from "@/components/Form/TextField";
import Button from "@/components/Button/Button";
import HeroImage from "../public/images/coffee-item.jpg";
import { coffeePopularData } from "@/lib/data";

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto mt-6">
        {/* Hero section */}
        <section className="mb-28 flex justify-between">
          <div className="flex flex-col items-start gap-9">
            <h1 className="text-5xl text-black">
              This Headline is for the Sunny Coffee shop Project
            </h1>
            <p className="text-base text-neutral-500">
              This is the description for the sunny Coffee Project. That will be
              developed using Next.js
            </p>

            <Button variant="primary" url="/shop" label="Get Coffee" />
          </div>
          <div className="shrink-0">
            <Image
              src={HeroImage}
              width={600}
              height={500}
              alt="Hero Image"
              className="rounded"
            />
          </div>
        </section>

        {/* Popular coffee section */}
        <section className="mb-28">
          <h2 className="mb-4 text-center text-2xl">Our Popular Coffee</h2>
          <p className="mb-14 text-center text-base text-neutral-500">
            List of our best selling coffee
          </p>
          <div className="grid grid-cols-4 justify-items-center gap-6">
            {coffeePopularData.map((coffeeItem) => {
              return <CoffeeCard coffeeItem={coffeeItem} key={coffeeItem.id} />;
            })}
          </div>
        </section>

        {/* Benefits of our coffee section */}
        <section className="mb-28">
          <h2 className="mb-4 text-center text-2xl">Benefits of our coffee</h2>
          <p className="mb-14 text-center text-base text-neutral-500">
            Check out our coffee benefits
          </p>

          <div className="grid grid-cols-3 justify-center gap-6">
            {/* 01 */}
            <div className="flex flex-col items-center gap-5">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-yellow-200">
                <FontAwesomeIcon className="h-24 w-24" icon={faCrown} />
              </div>
              <h3 className="text-2xl">New York Family Owned</h3>
              <p className="text-base text-neutral-500">
                Our family has taken pride in sourcing, roasting, and brewing
                the highest-quality coffee for over 12 years in New York City.
              </p>
            </div>

            {/* 02 */}
            <div className="flex flex-col items-center gap-5">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-yellow-200">
                <FontAwesomeIcon
                  className="h-24 w-24"
                  icon={faArrowsToCircle}
                />
              </div>
              <h3 className="text-2xl">Ethically Sourced</h3>
              <p className="text-base text-neutral-500">
                Our specialty coffee beans are traceable back to their farm or
                cooperative. Our coffee is USDA Organic, Fair Trade & Direct
                Trade.
              </p>
            </div>

            {/* 03 */}
            <div className="flex flex-col items-center gap-5">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-yellow-200">
                <FontAwesomeIcon className="h-24 w-24" icon={faMedal} />
              </div>
              <h3 className="text-2xl">Rare & Exceptional Coffees</h3>
              <p className="text-base text-neutral-500">
                We source exceptional coffees like the Gesha variety from
                award-winning farms. We offer delicious decaf options.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter section */}
        <section className="mb-28">
          <h2 className="mb-4 text-center text-2xl">Newsletter</h2>
          <p className="mb-14 text-center text-base text-neutral-500">
            Sign up for our newsletter to receive coffee tips
          </p>

          <form className="flex justify-center gap-6">
            <TextField name="newsletter" placeholder="Enter your email" />
            <Button variant="primary" label="Sign Up" type="submit" />
          </form>
        </section>
      </section>
    </Layout>
  );
}
