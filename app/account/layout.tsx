import {
  BsPersonCircle,
  BsBasket2Fill,
  BsHeartFill,
  BsBoxArrowRight,
} from "react-icons/bs";
import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import Sidebar from "@/app/ui/navigation/sidebar/Sidebar";
import SidebarItem from "@/app/ui/navigation/sidebar/SidebarItem";
import SidebarLogoutItem from "../ui/navigation/sidebar/SidebarLogoutItem";

export default function AccoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />

      <section className="section section--sidebar">
        <Sidebar customeClasses="section__sidebar">
          <SidebarItem label="Profile" url="/account">
            <BsPersonCircle />
          </SidebarItem>
          <SidebarItem label="Order history" url="/account/orders">
            <BsBasket2Fill />
          </SidebarItem>
          <SidebarItem label="Favorites" url="/account/favorite">
            <BsHeartFill />
          </SidebarItem>
          <SidebarLogoutItem label="Logout">
            <BsBoxArrowRight />
          </SidebarLogoutItem>
        </Sidebar>
        <main className="section__content" id="content">
          {children}
        </main>
      </section>

      <Footer />
    </div>
  );
}
