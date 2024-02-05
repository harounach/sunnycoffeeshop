import ProfileManageAccountForm from "@/app/ui/section/account/profile/ProfileManageAccountForm";
import ProfileDeleteAccountForm from "@/app/ui/section/account/profile/ProfileDeleteAccountForm";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  const userId = session?.user ? session?.user._id : "";

  return (
    <section className="profile-page">
      <section className="section section--page">
        <div className="container">
          <h1 className="title title-large">Manage Account</h1>
          <p className="desc body-base">Customize and manage your account</p>
          <div className="profile-page__form">
            <ProfileManageAccountForm userId={userId} />
            <ProfileDeleteAccountForm />
          </div>
        </div>
      </section>
    </section>
  );
}
