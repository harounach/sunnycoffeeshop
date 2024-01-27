import {
  BsBasket2Fill,
  BsBoxArrowRight,
  BsGrid1X2Fill,
  BsCupHotFill,
  BsPeopleFill,
} from "react-icons/bs";
import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import AdminSidebar from "@/app/ui/navigation/sidebar/AdminSidebar";
import SidebarItem from "@/app/ui/navigation/sidebar/SidebarItem";
import SidebarLogoutItem from "../ui/navigation/sidebar/SidebarLogoutItem";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />

      <section className="section section--sidebar">
        <AdminSidebar customeClasses="section__sidebar">
          {/* Dashboard */}
          <SidebarItem label="Dashboard" url="/admin">
            <BsGrid1X2Fill />
          </SidebarItem>

          {/* Products */}
          <SidebarItem label="Products" url="/admin/products">
            <BsCupHotFill />
          </SidebarItem>

          {/* Orders */}
          <SidebarItem label="Orders" url="/admin/orders">
            <BsBasket2Fill />
          </SidebarItem>

          {/* Users */}
          <SidebarItem label="Users" url="/admin/users">
            <BsPeopleFill />
          </SidebarItem>

          {/* Logout */}
          <SidebarLogoutItem label="Logout">
            <BsBoxArrowRight />
          </SidebarLogoutItem>
        </AdminSidebar>
        <main className="section__content" id="content">
          {children}
        </main>
      </section>

      <Footer />
    </div>
  );
}
