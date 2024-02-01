import AdminCoffeeDetail from "@/app/ui/section/admin/products/single/AdminCoffeeDetail";
import AdminReviewList from "@/app/ui/section/admin/products/single/AdminReviewList";
import { products } from "@/app/lib/placeholder-data";

export default async function Page({ params }: { params: { id: string } }) {
  const coffeeProduct = products.find((product) => product._id === params.id);

  // TODO: remember to use real data
  // const coffeeProduct = await fetchSingleProduct(params.id);

  return (
    <section className="admin-edit-product-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">{coffeeProduct?.title}</h1>
          <p className="desc body-base">View coffee details</p>
          <div className="admin-edit-product-page__content">
            <AdminCoffeeDetail product={coffeeProduct!} />
            <AdminReviewList productId={coffeeProduct?._id!} />
          </div>
        </div>
      </section>
    </section>
  );
}
