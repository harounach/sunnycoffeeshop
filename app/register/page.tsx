import RegisterForm from "@/app/ui/section/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="page" id="content">
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-medium">Register</h1>
          <p className="desc body-base">
            Create your account to customize your shopping experience
          </p>
          <div className="page__form">
            <RegisterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
