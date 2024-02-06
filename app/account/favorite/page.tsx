import { favoriteProducts } from "@/app/lib/placeholder-data";
import FavoriteCoffeeList from "@/app/ui/section/account/favorite/FavoriteCoffeeList";

export default function AccountFavoritePage() {
  return (
    <>
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">Favorites</h1>
          <p className="desc body-base">Checkout your favorite coffee</p>
          <div className="account-page__favorite">
            <FavoriteCoffeeList favoriteProducts={favoriteProducts} />
          </div>
        </div>
      </section>
    </>
  );
}
