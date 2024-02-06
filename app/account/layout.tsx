import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import Sidebar from "@/app/ui/navigation/sidebar/Sidebar";

export default function AccoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="account-page">
      {/* section section--sidebar */}
      {/* section__sidebar */}
      <Sidebar customeClasses="account-page__sidebar" />
      {/* section__content */}
      <section className="account-page__content" id="content">
        {children}
      </section>
    </main>
  );
}
