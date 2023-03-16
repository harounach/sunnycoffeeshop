import React from "react";
import AdminLayout from "@/components/Layout/AdminLayout";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import { deleteOrder } from "@/lib/orderUtils";
import AdminOrderRow from "@/components/Table/AdminOrderRow";
import Pagination from "@/components/Pagination/Pagination";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/authHook";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";
import { useOrders } from "@/hooks/orderHook";

export default function AdminOrders() {
  // Check if user is logged in
  useAuth();

  // Call orders api
  const { result, loading } = useOrders();

  const router = useRouter();

  const user = useAppSelector(selectUser) as User;

  // Delete order from database
  const onOrderDeleted = async (orderId: string) => {
    const { error, message, data } = await deleteOrder(user, orderId);
    if (!error) {
      router.push("/admin/orders");
    }
  };

  return (
    <AdminLayout>
      <section className="container mx-auto mt-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <AdminSidebar orders />
          {/* Main Content */}
          <div className="col-span-9">
            <h1 className="mb-4 text-center text-2xl">Orders</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              View and manage orders
            </p>

            {loading ? (
              <div>Loading</div>
            ) : (
              <div className="mb-6 flex flex-col justify-center gap-4">
                <table className="border-collapse border-2 border-gray-200">
                  <thead>
                    <tr className="border-2 border-gray-200">
                      <th className="border-2 border-gray-200">ID</th>
                      <th className="border-2 border-gray-200">Date</th>
                      <th className="border-2 border-gray-200">Total</th>
                      <th className="border-2 border-gray-200">
                        Payment method
                      </th>
                      <th className="border-2 border-gray-200">Paid</th>
                      <th className="border-2 border-gray-200">Delivered</th>
                      <th className="border-2 border-gray-200">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result?.data?.map((order) => {
                      return (
                        <AdminOrderRow
                          order={order}
                          key={order._id}
                          deleteOrder={() => onOrderDeleted(order._id)}
                        />
                      );
                    })}
                  </tbody>
                </table>
                <div className="mt-4">
                  <Pagination
                    baseURL="/admin/orders"
                    page={result?.page as number}
                    pages={result?.pages as number}
                    order={-1}
                    count={result?.count as number}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
