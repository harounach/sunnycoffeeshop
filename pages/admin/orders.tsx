import Link from "next/link";

import Layout from "@/components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faBarsProgress,
  faEye,
  faRightFromBracket,
  faShoppingBasket,
  faTag,
  faTrash,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { GetOrdersApiResult } from "@/types/OrdersApiResults";
import { getOrdersURL, getOrderPaginationURL } from "@/lib/urlUtils";

import IconButton from "@/components/Button/IconButton";
import AdminOrderRow from "@/components/Table/AdminOrderRow";
import AdminOrderPagination from "@/components/Table/AdminOrderPagination";

interface AdminOrdersProps {
  ordersApiResult: GetOrdersApiResult;
}

export default function AdminOrders({ ordersApiResult }: AdminOrdersProps) {
  const { data: orders, message, pages, page } = productsApiResult;

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
                    className="flex items-center gap-4 text-neutral-600"
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
                    />{" "}
                    <span className="text-base">Products</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center gap-4 text-yellow-700"
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
            <h1 className="mb-4 text-center text-2xl">Orders</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              View and manage orders
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
                  {orders.map((order) => {
                    return <AdminOrderRow order={order} key={order._id} />;
                  })}
                </tbody>
              </table>
              <div className="mt-4">
                <AdminOrderPagination page={page} pages={pages} order={-1} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Complete this function to get all the orders
export const getServerSideProps: GetServerSideProps<{
  ordersApiResult: GetOrdersApiResult;
}> = async (context) => {
  const { page, perpage, order } = context.query;

  const GET_ORDERS_URL = getOrdersURL(page, perpage, order);

  const response = await fetch(GET_ORDERS_URL);
  const result = await response.json();

  return {
    props: {
      ordersApiResult: result,
    },
  };
};
