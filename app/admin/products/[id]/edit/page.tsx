import EditProductForm from "@/app/ui/section/admin/products/edit/EditProductForm";
import { fetchSingleProduct } from "@/app/lib/database/product/product.query";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <section className="admin-edit-product-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Edit {`"${product.title}"`}</h1>
          <p className="desc body-base">Edit your coffee</p>
          <div className="admin-edit-product-page__content">
            <EditProductForm product={product} />
          </div>
        </div>
      </section>
    </section>
  );
}
