import AdminLayout from "@/components/Layout/AdminLayout";
import AdminUserRow from "@/components/Table/AdminUserRow";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import Pagination from "@/components/Pagination/Pagination";
import { useAuthNavigate } from "@/hooks/authHook";
import { useUsers } from "@/hooks/userHook";
import Loader from "@/components/Loader/Loader";

export default function AdminUsers() {
  // Check if user is logged in
  useAuthNavigate();

  // Call orders api
  const { result, loading } = useUsers();

  return (
    <AdminLayout>
      <section className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <AdminSidebar users />
          {/* Main Content */}
          <div className="col-span-12 md:col-span-9">
            <h1 className="mb-4 text-center text-2xl">Users</h1>
            <p className="mb-14 text-center text-base text-neutral-500">
              View and manage users
            </p>
            {loading ? (
              <Loader size={"md"} />
            ) : (
              <div className="mb-6 flex flex-col justify-center gap-4">
                <div className="overflow-x-auto">
                  <table className="border-collapse border-2 border-gray-200">
                    <thead>
                      <tr className="border-2 border-gray-200">
                        <th className="border-2 border-gray-200">ID</th>
                        <th className="border-2 border-gray-200">Name</th>
                        <th className="border-2 border-gray-200">Joined At</th>
                        <th className="border-2 border-gray-200">
                          Total Orders
                        </th>
                        <th className="border-2 border-gray-200">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result?.data?.map((user) => {
                        return <AdminUserRow user={user} key={user._id} />;
                      })}
                    </tbody>
                  </table>
                </div>
                <Pagination
                  baseURL="/admin/users"
                  page={result?.page as number}
                  pages={result?.pages as number}
                  order={-1}
                  count={result?.count as number}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
