import IconButton from "@/components/Button/IconButton";
import Layout from "@/components/Layout/Layout";

import { coffeeAllData } from "@/lib/data";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart as OutlineHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Rating from "@/components/Rating/Rating";

const firstCoffeeItem = coffeeAllData[0];

export default function Product() {
  return (
    <Layout>
      <section className="container mx-auto mt-6 mb-6">
        <h1 className="mb-4 text-center text-2xl">{firstCoffeeItem.title}</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Customize your coffee
        </p>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <div className="flex justify-center">
              <Image
                src={firstCoffeeItem.image}
                width={300}
                height={200}
                alt={firstCoffeeItem.title}
              />
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex flex-col gap-4 pr-48">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium">{firstCoffeeItem.title}</h2>
                <h3 className="text-xl font-medium">{`$${firstCoffeeItem.price}`}</h3>
              </div>
              <div className="flex items-center gap-2">
                <Rating value={4.5} />
                <span className="text-neutral-500">(12)</span>
              </div>
              <div>
                <p className="text-base text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  dolore! Reiciendis, consequuntur labore? Doloribus quis sint
                  ipsam? Cupiditate sit culpa inventore dolorem est, consequatur
                  tempore ex quos quibusdam, fugiat laboriosam?
                </p>
              </div>
              <div className="flex justify-end gap-4">
                <IconButton
                  icon={OutlineHeart}
                  size="normal"
                  variant="primary"
                />
                <IconButton icon={faCartPlus} size="normal" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
