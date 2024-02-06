import NotFoundImage from "@/app/ui/misc/NotFoundImage";

export default function OrderNotFound() {
  return (
    <>
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">Order Not Found</h1>
          <p className="desc body-base">No such order with this Id</p>
          <div>
            <NotFoundImage />
          </div>
        </div>
      </section>
    </>
  );
}
