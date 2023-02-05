import Link from "next/link";

import Layout from "@/components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faRightFromBracket,
  faShoppingBasket,
  faUser,
  faAnglesLeft,
  faAnglesRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import IconButton from "@/components/Button/IconButton";

export default function OrderHistory() {
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
                    className="flex items-center gap-4 text-yellow-700"
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
            <h1 className="mb-4 text-center text-2xl">Order History</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              View your order history
            </p>

            <div className="mb-6 flex flex-col justify-center gap-4">
              <table className="border-collapse border-2 border-gray-200">
                <thead>
                  <tr className="border-2 border-gray-200">
                    <th className="border-2 border-gray-200">ID</th>
                    <th className="border-2 border-gray-200">Date</th>
                    <th className="border-2 border-gray-200">Total</th>
                    <th className="border-2 border-gray-200">Paid</th>
                    <th className="border-2 border-gray-200">Delivered</th>
                    <th className="border-2 border-gray-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-200 px-4">
                      incjdncjndvjnfdjvnf
                    </td>
                    <td className="border-2 border-gray-200 px-4">
                      12 Dec 2022
                    </td>
                    <td className="border-2 border-gray-200 px-4">$46</td>
                    <td className="border-2 border-gray-200 px-4">
                      12 Dec 2022
                    </td>
                    <td className="border-2 border-gray-200 px-4">
                      12 Dec 2022
                    </td>
                    <td className="border-2 border-gray-200 px-4">
                      <div className="flex items-center justify-center">
                        <IconButton
                          icon={faEye}
                          variant="primaryIcon"
                          size="normal"
                          url="/order"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-200 px-4">
                      incjdncjndvjnfdjvnf
                    </td>
                    <td className="border-2 border-gray-200 px-4">
                      12 Dec 2022
                    </td>
                    <td className="border-2 border-gray-200 px-4">$46</td>
                    <td className="border-2 border-gray-200 px-4">
                      12 Dec 2022
                    </td>
                    <td className="border-2 border-gray-200 px-4">
                      12 Dec 2022
                    </td>
                    <td className="border-2 border-gray-200 px-4">
                      <div className="flex items-center justify-center">
                        <IconButton
                          icon={faEye}
                          variant="primaryIcon"
                          size="normal"
                          url="/order"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-200 px-4">
                      incjdncjndvjnfdjvnf
                    </td>
                    <td className="border-2 border-gray-200 px-4">
                      12 Dec 2022
                    </td>
                    <td className="border-2 border-gray-200 px-4">$46</td>
                    <td className="border-2 border-gray-200 px-4">
                      12 Dec 2022
                    </td>
                    <td className="border-2 border-gray-200 px-4">
                      12 Dec 2022
                    </td>
                    <td className="border-2 border-gray-200 px-4">
                      <div className="flex items-center justify-center">
                        <IconButton
                          icon={faEye}
                          variant="primaryIcon"
                          size="normal"
                          url="/order"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex  items-center justify-end gap-4 border-2 border-gray-200 px-6">
                <form className="flex items-center gap-4">
                  <label htmlFor="rows_per_page">Rows per page</label>
                  <select name="rows_per_page" id="rows_per_page">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                  </select>
                </form>
                <span>1-10 of 100</span>
                <div className="flex items-center gap-2">
                  <IconButton
                    icon={faAnglesLeft}
                    size="normal"
                    variant="white"
                  />
                  <IconButton
                    icon={faAngleLeft}
                    size="normal"
                    variant="white"
                  />
                  <IconButton
                    icon={faAngleRight}
                    size="normal"
                    variant="white"
                  />
                  <IconButton
                    icon={faAnglesRight}
                    size="normal"
                    variant="white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
