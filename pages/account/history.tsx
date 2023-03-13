import Layout from "@/components/Layout/Layout";
import Sidebar from "@/components/Sidebar/Sidebar";
import { GetOrdersApiResult } from "@/types/OrdersApiResults";
import { GetServerSideProps } from "next";
import { getPaginationURL, USERS_API_URL } from "@/lib/urlUtils";
import { getOrders } from "@/lib/orderUtils";
import OrderHistoryRow from "@/components/Table/OrderHistoryRow";
import Pagination from "@/components/Pagination/Pagination";
import { useAuth } from "@/hooks/authHook";
import User from "@/types/User";

interface OrderHistoryProps {
  ordersApiResult: GetOrdersApiResult;
}

export default function OrderHistory({ ordersApiResult }: OrderHistoryProps) {
  // Check if user is logged in
  useAuth();

  const { data: orders, message, pages, page, count } = ordersApiResult;
  return (
    <Layout>
      <section className="container mx-auto mt-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <Sidebar history />
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
                    <th className="border-2 border-gray-200">Payment method</th>
                    <th className="border-2 border-gray-200">Paid</th>
                    <th className="border-2 border-gray-200">Delivered</th>
                    <th className="border-2 border-gray-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((order) => {
                    return <OrderHistoryRow order={order} key={order._id} />;
                  })}
                </tbody>
              </table>
              <div className="mt-4">
                <Pagination
                  baseURL="/account/history"
                  page={page}
                  pages={pages}
                  order={-1}
                  count={count}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<OrderHistoryProps> = async (
  context
) => {
  const { page, perpage, order } = context.query;
  const user = JSON.parse(context.req.cookies.userInfo as string) as User;

  const GET_USER_ORDERS_API_URL = `${USERS_API_URL}/${user._id}/orders`;

  const GET_ORDERS_URL = getPaginationURL(GET_USER_ORDERS_API_URL, {
    page: page as string,
    perpage: perpage as string,
    order: order as string,
  });

  const result = await getOrders(user, GET_ORDERS_URL);

  return {
    props: {
      ordersApiResult: result,
    },
  };
};
