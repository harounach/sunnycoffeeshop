import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import Hero from "@/app/ui/section/Hero";

export default function Page() {
  return (
    <div>
      <Header />
      <main className="home" id="content">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
