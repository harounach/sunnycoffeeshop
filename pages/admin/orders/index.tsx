import React from "react";
import AdminLayout from "@/components/Layout/AdminLayout";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import { GetOrdersApiResult } from "@/types/OrdersApiResults";
import { getPaginationURL, ORDERS_API_URL } from "@/lib/urlUtils";

import AdminOrderRow from "@/components/Table/AdminOrderRow";
import { GetServerSideProps } from "next";
import Pagination from "@/components/Pagination/Pagination";

interface AdminOrdersProps {
  ordersApiResult: GetOrdersApiResult;
}

export default function AdminOrders({ ordersApiResult }: AdminOrdersProps) {
  const { data: orders, message, pages, page, count } = ordersApiResult;

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
                <Pagination
                  baseURL="/admin/orders"
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
    </AdminLayout>
  );
}

export const getServerSideProps: GetServerSideProps<AdminOrdersProps> = async (
  context
) => {
  const { page, perpage, order } = context.query;

  const GET_ORDERS_URL = getPaginationURL(ORDERS_API_URL, {
    page: page as string,
    perpage: perpage as string,
    order: order as string,
  });

  const response = await fetch(GET_ORDERS_URL);
  const result = await response.json();

  return {
    props: {
      ordersApiResult: result,
    },
  };
};
