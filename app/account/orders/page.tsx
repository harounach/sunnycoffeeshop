import AccountOrderTable from "@/app/ui/actionables/table/AccountOrderTable";
import { auth } from "@/auth";

export default async function AccountOrdersPage({
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
    <>
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">Order History</h1>
          <p className="desc body-base">View your order history</p>
          <AccountOrderTable currentPage={currentPage} userId={userId} />
        </div>
      </section>
    </>
  );
}
