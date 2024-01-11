import EditProductForm from "@/app/ui/inputs/EditProductForm";
import { products } from "@/app/lib/placeholder-data";

export default function Page({ params }: { params: { id: string } }) {
  const product = products.find((product) => product._id === params.id);

  return (
    <section className="admin-edit-product-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Edit {`"${product?.title}"`}</h1>
          <p className="desc body-base">Edit your coffee</p>
          <div className="admin-edit-product-page__content">
            <EditProductForm />
          </div>
        </div>
      </section>
    </section>
  );
}
