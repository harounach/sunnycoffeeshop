import AccountOrderTable from "@/app/ui/actionables/table/AccountOrderTable";
import { auth } from "@/auth";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const session = await auth();
  const userId = session?.user ? session?.user._id : "";

  return (
    <section className="account-orders-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Order History</h1>
          <p className="desc body-base">View your order history</p>
          <div className="account-orders-page__table">
            <AccountOrderTable currentPage={currentPage} userId={userId} />
          </div>
        </div>
      </section>
    </section>
  );
}
