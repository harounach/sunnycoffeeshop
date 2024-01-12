import {
  BsCurrencyExchange,
  BsBasket2Fill,
  BsCupHotFill,
} from "react-icons/bs";
import DashboardInfoCard from "@/app/ui/cards/DashboardInfoCard";
import BarChart from "@/app/ui/charts/BarChart";
import DonutChart from "@/app/ui/charts/DonutChart";
import AdminLatestOrdersTable from "@/app/ui/actionables/table/AdminLatestOrdersTable";
import AdminOrderTableRow from "@/app/ui/actionables/table/AdminOrderTableRow";
import {
  barChartData,
  donutChartData,
  ordersData,
} from "@/app/lib/placeholder-data";

export default function Page() {
  const orderRows = ordersData.map((order) => {
    return <AdminOrderTableRow key={order._id} order={order} />;
  });

  return (
    <section className="admin-dashboard-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Dashboard</h1>
          <p className="desc body-base">
            View a summary of orders and analytics
          </p>
          <div className="admin-dashboard-page__content">
            <div className="admin-dashboard-page__summary">
              <DashboardInfoCard
                label="Total Sales"
                value="$99000"
                color="blue"
              >
                <BsCurrencyExchange />
              </DashboardInfoCard>

              <DashboardInfoCard label="Total Orders" value="340" color="green">
                <BsBasket2Fill />
              </DashboardInfoCard>

              <DashboardInfoCard
                label="Total Products"
                value="42"
                color="orange"
              >
                <BsCupHotFill />
              </DashboardInfoCard>
            </div>
            <h2 className="subtile title-medium">Analytics</h2>
            <div className="admin-dashboard-page__charts">
              <div className="admin-dashboard-page__bar">
                <BarChart salesData={barChartData} />
              </div>
              <div className="admin-dashboard-page__donut">
                <DonutChart popularCoffeeData={donutChartData} />
              </div>
            </div>
            <h2 className="subtile title-medium">Lastet orders</h2>
            <AdminLatestOrdersTable>{orderRows}</AdminLatestOrdersTable>
          </div>
        </div>
      </section>
    </section>
  );
}
