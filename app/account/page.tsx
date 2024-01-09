import ProfileManageAccountForm from "@/app/ui/inputs/ProfileManageAccountForm";
import ProfileDeleteAccountForm from "@/app/ui/inputs/ProfileDeleteAccountForm";

export default function Page() {
  return (
    <section className="profile-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Manage Account</h1>
          <p className="desc body-base">Customize and manage your account</p>
          <div className="profile-page__form">
            <ProfileManageAccountForm />
            <ProfileDeleteAccountForm />
          </div>
        </div>
      </section>
    </section>
  );
}
