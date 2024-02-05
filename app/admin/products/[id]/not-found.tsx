import NotFoundImage from "@/app/ui/misc/NotFoundImage";

export default function ProductNotFound() {
  return (
    <section className="admin-edit-product-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Coffee Not Found</h1>
          <p className="desc body-base">No such coffee in our menu</p>
          <div>
            <NotFoundImage />
          </div>
        </div>
      </section>
    </section>
  );
}
