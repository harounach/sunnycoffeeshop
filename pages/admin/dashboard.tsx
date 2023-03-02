import AdminLayout from "@/components/Layout/AdminLayout";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faCircleDollarToSlot,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { GetOrdersApiResult } from "@/types/OrdersApiResults";
import DashboardOrderRow from "@/components/Table/DashboardOrderRow";
import { GetServerSideProps } from "next";
import {
  getPaginationURL,
  ORDERS_API_URL,
  SUMMARY_API_URL,
} from "@/lib/urlUtils";
import { useEffect, useState } from "react";
import axios from "axios";
import { GetSummaryApiResult } from "@/types/SummaryApiResults";
import BarChart from "@/components/Chart/BarChart";
import { SummarySaleEntry } from "@/types/Summary";
import PieChart from "@/components/Chart/PieChart";

interface AdminDashboardProps {
  ordersApiResult: GetOrdersApiResult;
}

export default function AdminDashboard({
  ordersApiResult,
}: AdminDashboardProps) {
  const { data: orders, message, pages, page } = ordersApiResult;
  const [totalSales, setTotalSales] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [salesData, setSalesData] = useState<Array<SummarySaleEntry>>([]);

  // Get summary data
  const getSummary = async () => {
    try {
      const response = await axios<GetSummaryApiResult>({
        method: "GET",
        url: SUMMARY_API_URL,
        validateStatus: () => true,
      });

      const result = response.data;
      const { message, data: summary, error: reviewsError } = result;

      if (summary) {
        setTotalSales(summary.ordersPrice);
        setTotalOrders(summary.orderCount);
        setTotalProducts(summary.productCount);
        setSalesData(summary.salesData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSummary();
  }, []);

  return (
    <AdminLayout>
      <section className="container mx-auto mt-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <AdminSidebar dashboard />
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
                  <span className="text-neutral-500">{`$${totalSales}`}</span>
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
                  <span className="text-neutral-500">{totalOrders}</span>
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
                  <span className="text-neutral-500">{totalProducts}</span>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="mb-6">
              <h2 className="text-lg font-medium">Analytics</h2>

              <div className=" grid grid-cols-12 gap-6">
                <div className="col-span-6">
                  {/* Bar chart */}
                  {salesData && <BarChart salesData={salesData} />}
                </div>
                <div className="col-span-4">
                  {/* Pie chart */}
                  <PieChart />
                </div>
              </div>
            </div>
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
                  {orders.map((order) => {
                    return <DashboardOrderRow order={order} key={order._id} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export const getServerSideProps: GetServerSideProps<
  AdminDashboardProps
> = async (context) => {
  const GET_ORDERS_URL = getPaginationURL(ORDERS_API_URL, {
    page: 1,
    perpage: 8,
    order: -1,
  });

  const response = await fetch(GET_ORDERS_URL);
  const result = await response.json();

  return {
    props: {
      ordersApiResult: result,
    },
  };
};
