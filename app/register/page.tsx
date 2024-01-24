import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import RegisterForm from "@/app/ui/section/auth/RegisterForm";

export default function Page() {
  return (
    <div>
      <Header />
      <main className="register-page" id="content">
        <section className="register-page__sect section section--page">
          <div className="container">
            <h1 className="title title-medium">Register</h1>
            <p className="desc body-base">
              Create your account to customize your shopping experience
            </p>
            <div className="register-page__form">
              <RegisterForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
