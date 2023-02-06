import Chip from "@/components/Chip/Chip";
import ChipGroup from "@/components/Chip/ChipGroup";
import CoffeeCard from "@/components/Card/CoffeeCard";
import Layout from "@/components/Layout/Layout";
import { coffeeAllData } from "@/lib/data";

export default function Shop() {
  return (
    <Layout>
      <section className="container mx-auto mt-6">
        <h1 className="mb-4 text-center text-2xl">Shop</h1>
        <p className="mb-14 text-center text-base text-neutral-500">
          Shop your favorite taste of coffee
        </p>

        {/* Sort and Filter */}
        <section className="mb-6 flex justify-between">
          <div>
            <h3 className="mb-4 text-lg">Sort by</h3>
            <div>
              <ChipGroup>
                <Chip label="Latest" variant="default" />
                <Chip label="Oldest" variant="default" />
                <Chip label="Price" variant="default" />
              </ChipGroup>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg">Filter by</h3>
            <div>
              <ChipGroup>
                <Chip label="Best Selling" variant="default" />
                <Chip label="Old" variant="default" />
                <Chip label="Price" variant="default" />
              </ChipGroup>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-4 gap-x-6 gap-y-8">
            {coffeeAllData.map((coffeeItem) => {
              return <CoffeeCard coffeeItem={coffeeItem} key={coffeeItem.id} />;
            })}
          </div>
        </section>
      </section>
    </Layout>
  );
}
