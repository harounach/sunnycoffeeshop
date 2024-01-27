import EditProductForm from "@/app/ui/section/admin/products/EditProductForm";
import { fetchSingleProduct } from "@/app/lib/database/product/product.query";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const singleProduct = {
    ...product,
    _id: product._id.toString(),
  };

  return (
    <section className="admin-edit-product-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">
            Edit {`"${singleProduct?.title}"`}
          </h1>
          <p className="desc body-base">Edit your coffee</p>
          <div className="admin-edit-product-page__content">
            <EditProductForm product={singleProduct} />
          </div>
        </div>
      </section>
    </section>
  );
}
