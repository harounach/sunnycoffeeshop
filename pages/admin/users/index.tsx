import AdminLayout from "@/components/Layout/AdminLayout";
import AdminUserRow from "@/components/Table/AdminUserRow";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import Pagination from "@/components/Pagination/Pagination";
import { GetUsersApiResult } from "@/types/UsersApiResults";
import { GetServerSideProps } from "next";
import { getPaginationURL, USERS_API_URL } from "@/lib/urlUtils";
import { getUsers } from "@/lib/userUtils";
import { useAuth } from "@/hooks/authHook";
import User from "@/types/User";

interface AdminUsersProps {
  usersApiResult: GetUsersApiResult;
}

export default function AdminUsers({ usersApiResult }: AdminUsersProps) {
  const { data: users, message, page, pages, count } = usersApiResult;

  // Check if user is logged in
  useAuth();

  return (
    <AdminLayout>
      <section className="container mx-auto mt-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <AdminSidebar users />
          {/* Main Content */}
          <div className="col-span-9">
            <h1 className="mb-4 text-center text-2xl">Users</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              View and manage users
            </p>

            <div className="mb-6 flex flex-col justify-center gap-4">
              <table className="border-collapse border-2 border-gray-200">
                <thead>
                  <tr className="border-2 border-gray-200">
                    <th className="border-2 border-gray-200">ID</th>
                    <th className="border-2 border-gray-200">Name</th>
                    <th className="border-2 border-gray-200">Joined At</th>
                    <th className="border-2 border-gray-200">Total Orders</th>
                    <th className="border-2 border-gray-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user) => {
                    return <AdminUserRow user={user} key={user._id} />;
                  })}
                </tbody>
              </table>
              <Pagination
                baseURL="/admin/users"
                page={page}
                pages={pages}
                order={-1}
                count={count}
              />
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export const getServerSideProps: GetServerSideProps<AdminUsersProps> = async (
  context
) => {
  const { page, perpage, order } = context.query;
  const user = JSON.parse(context.req.cookies.userInfo as string) as User;

  const GET_USERS_URL = getPaginationURL(USERS_API_URL, {
    page: page as string,
    perpage: perpage as string,
    order: order as string,
  });
  const result = await getUsers(user, GET_USERS_URL);

  return {
    props: {
      usersApiResult: result,
    },
  };
};
