import CreateProductForm from "./CreateProductForm";

export default function Page() {
  return (
    <section className="admin-create-product-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Add Product</h1>
          <p className="desc body-base">Create new product</p>
          <div className="admin-create-product-page__content">
            <CreateProductForm />
          </div>
        </div>
      </section>
    </section>
  );
}
