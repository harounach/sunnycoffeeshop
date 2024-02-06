import ProfileManageAccountForm from "@/app/ui/section/account/profile/ProfileManageAccountForm";
import { auth } from "@/auth";

export default async function AccountProfilePage() {
  const session = await auth();
  const userId = session?.user ? session?.user._id : "";

  return (
    <>
      <section className="section section--page bg-primary-100">
        <div className="container">
          <h1 className="title title-large">Manage Account</h1>
          <p className="desc body-base">Customize and manage your account</p>

          <ProfileManageAccountForm
            userId={userId}
            customClasses="account-page__form"
          />
        </div>
      </section>
    </>
  );
}
