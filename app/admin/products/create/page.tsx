import CreateProductForm from "@/app/ui/section/admin/products/create/CreateProductForm";

export default function Page() {
  return (
    <>
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">Add Product</h1>
          <p className="desc body-base">Create new product</p>
          <CreateProductForm customClasses="admin-page__form" />
        </div>
      </section>
    </>
  );
}
