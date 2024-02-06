import UsersList from "@/app/ui/section/admin/users/UsersList";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    page?: string;
  };
}) {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">Users</h1>
          <p className="desc body-base">View and manage users</p>
          <div className="admin-page__user-list">
            <UsersList query={query} currentPage={currentPage} />
          </div>
        </div>
      </section>
    </>
  );
}
