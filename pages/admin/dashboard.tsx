import Link from "next/link";

import Layout from "@/components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faRightFromBracket,
  faShoppingBasket,
  faTag,
  faUserGroup,
  faCircleDollarToSlot,
  faBasketShopping,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/components/Button/IconButton";

export default function AdminDashboard() {
  return (
    <Layout>
      <section className="container mx-auto mt-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3 bg-neutral-100 px-6 py-4">
            <h2 className="mb-4 text-center text-xl">Admin: John Doe</h2>
            <p className="mb-14 text-center text-base text-neutral-500">
              Joined on 12 Dec 2022
            </p>

            <div className="flex justify-center">
              <ul className="inline-flex flex-col gap-4">
                <li>
                  <Link
                    className="flex items-center gap-4 text-yellow-700"
                    href={"/admin/dashboard"}
                  >
                    <FontAwesomeIcon
                      className="h-6 w-6"
                      icon={faBarsProgress}
                    />
                    <span className="text-base">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/admin/products"}
                  >
                    <FontAwesomeIcon
                      className="h-6 w-6"
                      icon={faShoppingBasket}
                    />
                    <span className="text-base">Products</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/admin/orders"}
                  >
                    <FontAwesomeIcon className="h-6 w-6" icon={faTag} />{" "}
                    <span className="text-base">Orders</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 text-neutral-600"
                    href={"/admin/users"}
                  >
                    <FontAwesomeIcon className="h-6 w-6" icon={faUserGroup} />{" "}
                    <span className="text-base">Users</span>
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
                    />
                    <span className="text-base">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Main Content */}
          <div className="col-span-9">
            <h1 className="mb-4 text-center text-2xl">Dashboard</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              View a summary of orders and analytics
            </p>

            <div className="mb-6 flex justify-between gap-4">
              <div className="flex flex-grow gap-4 border-2 border-gray-200 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-200">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-blue-600"
                    icon={faCircleDollarToSlot}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span>Total Sales</span>
                  <span className="text-neutral-500">$99000</span>
                </div>
              </div>
              <div className="flex flex-grow gap-4 border-2 border-gray-200 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-200">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-green-600"
                    icon={faTag}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span>Total Orders</span>
                  <span className="text-neutral-500">340</span>
                </div>
              </div>
              <div className="flex flex-grow gap-4 border-2 border-gray-200 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-200">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-orange-500"
                    icon={faBasketShopping}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span>Total Products</span>
                  <span className="text-neutral-500">42</span>
                </div>
              </div>
            </div>

            {/* Charts */}
            {/* Latest Orders */}
            <div className="mb-6 flex flex-col justify-center gap-4">
              <h2 className="text-lg font-medium">Latest orders</h2>
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
