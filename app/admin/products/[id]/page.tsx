import AdminCoffeeDetail from "@/app/ui/section/admin/products/single/AdminCoffeeDetail";
import AdminReviewList from "@/app/ui/section/admin/products/single/AdminReviewList";
import { fetchSingleProduct } from "@/app/lib/database/product/product.query";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const coffeeProduct = await fetchSingleProduct(params.id);

  if (!coffeeProduct) {
    notFound();
  }

  return (
    <>
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">{coffeeProduct.title}</h1>
          <p className="desc body-base">View coffee details</p>
          <AdminCoffeeDetail product={coffeeProduct} />
          <AdminReviewList productId={coffeeProduct._id.toString()} />
        </div>
      </section>
    </>
  );
}
