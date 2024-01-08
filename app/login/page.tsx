import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import LoginForm from "@/app/ui/inputs/LoginForm";

export default function Page() {
  return (
    <div>
      <Header />
      <main className="login-page" id="content">
        <section className="login-page__sect section section--page">
          <div className="container">
            <h1 className="title title-medium">Login</h1>
            <p className="desc body-base">Login to you Account</p>
            <div className="login-page__form">
              <LoginForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
