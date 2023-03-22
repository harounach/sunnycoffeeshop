import Layout from "@/components/Layout/Layout";
import Sidebar from "@/components/Sidebar/Sidebar";
import OrderHistoryRow from "@/components/Table/OrderHistoryRow";
import Pagination from "@/components/Pagination/Pagination";
import { useAuthNavigate } from "@/hooks/authHook";
import { useUserOrders } from "@/hooks/orderHook";
import { GetUserOrdersApiResult } from "@/types/OrdersApiResults";

export default function OrderHistory() {
  // Check if user is logged in
  useAuthNavigate();

  // Call orders api
  const { result, loading } = useUserOrders();

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

            {loading ? (
              <div>Loading</div>
            ) : (
              <OrderHistoryContent
                ordersApiResult={result as GetUserOrdersApiResult}
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface OrderHistoryContentProps {
  ordersApiResult: GetUserOrdersApiResult;
}

function OrderHistoryContent({ ordersApiResult }: OrderHistoryContentProps) {
  const { page, pages, count, data: orders } = ordersApiResult;

  return (
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
          {orders.map((order) => {
            return <OrderHistoryRow order={order} key={order._id} />;
          })}
        </tbody>
      </table>
      <div className="mt-4">
        <Pagination
          baseURL="/account/history"
          page={page as number}
          pages={pages as number}
          order={-1}
          count={count as number}
        />
      </div>
    </div>
  );
}
