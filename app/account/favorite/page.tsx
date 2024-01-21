import FavoriteCoffeeList from "./FavoriteCoffeeList";
import { favoriteProducts } from "@/app/lib/placeholder-data";

export default function Page() {
  return (
    <section className="account-favorite-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Favorites</h1>
          <p className="desc body-base">Checkout your favorite coffee</p>
          <div className="account-favorite-page__content">
            <FavoriteCoffeeList favoriteProducts={favoriteProducts} />
          </div>
        </div>
      </section>
    </section>
  );
}
