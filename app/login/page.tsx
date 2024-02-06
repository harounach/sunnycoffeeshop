import LoginForm from "@/app/ui/section/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="page" id="content">
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-medium">Login</h1>
          <p className="desc body-base">Login to your Account</p>
          <div className="page__form">
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
