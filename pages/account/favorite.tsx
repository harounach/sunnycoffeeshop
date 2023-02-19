import Link from "next/link";

import Layout from "@/components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { coffeeFavoritesData } from "@/lib/data";
import FavoriteCard from "@/components/Card/FavoriteCard";

export default function Favorite() {
  return (
    <Layout>
      <section className="container mx-auto mt-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3 bg-neutral-100 px-6 py-4">
            <h2 className="mb-4 text-center text-xl">John Doe</h2>
            <p className="mb-14 text-center text-base text-neutral-500">
              Joined on 12 Dec 2022
            </p>

            <div className="flex justify-center">
              <ul className="inline-flex flex-col gap-4">
                <li>
                  <Link
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/account/profile"}
                  >
                    <FontAwesomeIcon className="h-6 w-6" icon={faUser} />{" "}
                    <span className="text-base">Profile Settings</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/account/history"}
                  >
                    <FontAwesomeIcon
                      className="h-6 w-6"
                      icon={faShoppingBasket}
                    />{" "}
                    <span className="text-base">Order history</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 text-yellow-700"
                    href={"/account/favorite"}
                  >
                    <FontAwesomeIcon className="h-6 w-6" icon={faHeart} />{" "}
                    <span className="text-base">Favorites</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/account/profile"}
                  >
                    <FontAwesomeIcon
                      className="h-6 w-6"
                      icon={faRightFromBracket}
                    />{" "}
                    <span className="text-base">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Main Content */}
          <div className="col-span-9">
            <h1 className="mb-4 text-center text-2xl">Favorites</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              Check out your favorite coffee
            </p>

            <div className="mb-6 flex flex-col gap-4 border-2 border-gray-200 p-4">
              <h2 className="text-center text-xl font-medium">Items</h2>
              <div className="flex flex-col gap-4">
                {coffeeFavoritesData.map((product) => {
                  return <FavoriteCard product={product} key={product._id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
