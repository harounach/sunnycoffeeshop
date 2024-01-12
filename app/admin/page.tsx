import {
  BsCurrencyExchange,
  BsBasket2Fill,
  BsCupHotFill,
} from "react-icons/bs";
import DashboardInfoCard from "@/app/ui/cards/DashboardInfoCard";

export default function Page() {
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
                label="Total sales"
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
          </div>
        </div>
      </section>
    </section>
  );
}
