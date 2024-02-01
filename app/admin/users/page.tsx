import UsersList from "@/app/ui/section/admin/users/UsersList";
import { users } from "@/app/lib/placeholder-data";

export default function Page() {
  return (
    <section className="admin-users-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Users</h1>
          <p className="desc body-base">View and manage users</p>
          <div className="admin-users-page__content">
            <UsersList users={users} />
          </div>
        </div>
      </section>
    </section>
  );
}
