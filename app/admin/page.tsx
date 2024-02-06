import {
  BsCurrencyExchange,
  BsBasket2Fill,
  BsCupHotFill,
} from "react-icons/bs";
import DashboardInfoCard from "@/app/ui/section/admin/dashboard/DashboardInfoCard";
import BarChart from "@/app/ui/charts/BarChart";
import DonutChart from "@/app/ui/charts/DonutChart";
import AdminLatestOrdersTable from "@/app/ui/actionables/table/AdminLatestOrdersTable";
import { barChartData, donutChartData } from "@/app/lib/placeholder-data";

export default async function DashboardPage() {
  return (
    <>
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">Dashboard</h1>
          <p className="desc body-base">
            View a summary of orders and analytics
          </p>
          <div className="admin-page__dashboard-info">
            <DashboardInfoCard label="Total Sales" value="$99000" color="blue">
              <BsCurrencyExchange />
            </DashboardInfoCard>

            <DashboardInfoCard label="Total Orders" value="340" color="green">
              <BsBasket2Fill />
            </DashboardInfoCard>

            <DashboardInfoCard label="Total Products" value="42" color="orange">
              <BsCupHotFill />
            </DashboardInfoCard>
          </div>
        </div>
      </section>
      <section className="section bg-neutral-50">
        <div className="container">
          <h2 className="subtile title-medium">Analytics</h2>
          <div className="admin-page__charts">
            <div className="admin-page__bar">
              <BarChart salesData={barChartData} />
            </div>
            <div className="admin-page__donut">
              <DonutChart popularCoffeeData={donutChartData} />
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-primary-100">
        <div className="container">
          <h2 className="subtile title-medium">Lastet orders</h2>
          <AdminLatestOrdersTable />
        </div>
      </section>
    </>
  );
}
