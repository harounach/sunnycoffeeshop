import EditProductForm from "@/app/ui/section/admin/products/edit/EditProductForm";
import { fetchSingleProduct } from "@/app/lib/database/product/product.query";
import { products } from "@/app/lib/placeholder-data";

export default async function Page({ params }: { params: { id: string } }) {
  const singleProduct = products.find((product) => product._id === params.id);
  // TODO: remember to use real data

  // const product = await fetchSingleProduct(params.id);
  // const singleProduct = {
  //   ...product,
  //   _id: product._id.toString(),
  // };

  return (
    <section className="admin-product-detail-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">
            Edit {`"${singleProduct?.title}"`}
          </h1>
          <p className="desc body-base">Edit your coffee</p>
          <div className="admin-product-detail-page__content">
            <EditProductForm product={singleProduct!} />
          </div>
        </div>
      </section>
    </section>
  );
}
