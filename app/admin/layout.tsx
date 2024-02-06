import AdminSidebar from "@/app/ui/navigation/sidebar/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="admin-page">
      {/* section section--sidebar */}
      {/* section__sidebar */}
      <AdminSidebar customeClasses="admin-page__sidebar" />
      {/* section__content */}
      <section className="admin-page__content" id="content">
        {children}
      </section>
    </main>
  );
}
