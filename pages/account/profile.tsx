import Link from "next/link";

import Layout from "@/components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faRightFromBracket,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button/Button";
import TextField from "@/components/Form/TextField";

export default function Profile() {
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
                    className="flex items-center gap-4 text-yellow-700"
                    href={"/account/profile"}
                  >
                    <FontAwesomeIcon className="h-6 w-6" icon={faUser} />{" "}
                    <span className="text-base">Profile Settings</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/account/profile"}
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
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/account/profile"}
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
            <h1 className="mb-4 text-center text-2xl">Manage Account</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              Customize and manage your account
            </p>

            <div className="mb-6 flex justify-center">
              <form className="inline-flex flex-col gap-4 border-2 border-gray-200 px-20 py-4">
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="username" className="text-base">
                    Username
                  </label>
                  <TextField
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="email" className="text-base">
                    Email
                  </label>
                  <TextField name="email" id="email" placeholder="Email" />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="new_password" className="text-base">
                    New Password
                  </label>
                  <TextField
                    name="new_password"
                    id="new_password"
                    placeholder="New Password"
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="confirm_password" className="text-base">
                    Confirm password
                  </label>
                  <TextField
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm password"
                  />
                </div>

                <Button label="Update Profile" type="submit" />
                <Button
                  label="Delete Account"
                  type="button"
                  customeClasses="bg-red-500 text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
