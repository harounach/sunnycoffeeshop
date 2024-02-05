import NotFoundImage from "@/app/ui/misc/NotFoundImage";
import Footer from "@/app/ui/navigation/footer/Footer";
import Header from "@/app/ui/navigation/header/Header";

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="product-page" id="content">
        <section className="product-page__coffee section section--page">
          <div className="container">
            <h1 className="title title-large">Coffee Not Found</h1>
            <p className="desc body-base">No such coffee in our menu</p>
            <div>
              <NotFoundImage />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
