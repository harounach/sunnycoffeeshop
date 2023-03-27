import AdminLayout from "@/components/Layout/AdminLayout";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faCircleDollarToSlot,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import DashboardOrderRow from "@/components/Table/DashboardOrderRow";
import { useEffect, useState } from "react";
import BarChart from "@/components/Chart/BarChart";
import { SummarySaleEntry } from "@/types/Summary";
import PieChart from "@/components/Chart/PieChart";
import { getAdminSummary } from "@/lib/adminUtils";
import { useAuthNavigate } from "@/hooks/authHook";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";
import { useOrders } from "@/hooks/orderHook";
import Loader from "@/components/Loader/Loader";

export default function AdminDashboard() {
  const [totalSales, setTotalSales] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [salesData, setSalesData] = useState<Array<SummarySaleEntry>>([]);

  // Check if user is logged in
  useAuthNavigate();

  const user = useAppSelector(selectUser) as User;

  useEffect(() => {
    // Get summary data
    const getSummary = async () => {
      try {
        const {
          message,
          data: summary,
          error: reviewsError,
        } = await getAdminSummary(user);

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

    getSummary();
  }, [user]);

  const { result, loading } = useOrders(8);

  return (
    <AdminLayout>
      <section className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <AdminSidebar dashboard />
          {/* Main Content */}
          <div className="col-span-12 md:col-span-9">
            <h1 className="mb-4 text-center text-2xl">Dashboard</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              View a summary of orders and analytics
            </p>

            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row">
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
                <div className="col-span-12 md:col-span-6">
                  {/* Bar chart */}
                  {salesData && <BarChart salesData={salesData} />}
                </div>
                <div className="col-span-12 md:col-span-4">
                  {/* Pie chart */}
                  <PieChart />
                </div>
              </div>
            </div>
            {/* Latest Orders */}

            {loading ? (
              <Loader size={"md"} />
            ) : (
              <div className="mb-6 flex flex-col justify-center gap-4">
                <h2 className="text-lg font-medium">Latest orders</h2>
                <div className="overflow-x-auto">
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
                      {result?.data?.map((order) => {
                        return (
                          <DashboardOrderRow order={order} key={order._id} />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
