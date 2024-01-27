import classNames from "classnames";
import TextInput from "@/app/ui/inputs/TextInput";
import Button from "@/app/ui/actionables/buttons/Button";

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

// ProfileManageAccountForm

interface ProfileManageAccountFormProps {
  customClasses?: string;
}

function ProfileManageAccountForm({
  customClasses,
}: ProfileManageAccountFormProps) {
  const classes = classNames("form", customClasses);

  return (
    <form className={classes}>
      {/* Username */}
      <TextInput
        name="username"
        label="Username"
        id="username"
        placeholder="Username"
      />

      {/* Email */}
      <TextInput
        name="email"
        label="Email"
        id="email"
        placeholder="Email"
        type="email"
      />

      {/* Password */}
      <TextInput
        name="new_password"
        label="New Password"
        id="new_password"
        placeholder="New Password"
        type="password"
      />

      {/* Confirm Password */}
      <TextInput
        name="confirm_password"
        label="Confirm Password"
        id="confirm_password"
        placeholder="Confirm Password"
        type="password"
      />

      <Button type="submit" label="Update Profile" />
    </form>
  );
}

// ProfileDeleteAccountForm

interface ProfileDeleteAccountFormProps {
  customClasses?: string;
}

function ProfileDeleteAccountForm({
  customClasses,
}: ProfileDeleteAccountFormProps) {
  const classes = classNames("form", customClasses);

  return (
    <form className={classes}>
      <Button type="submit" variant="danger" label="Delete Account" />
      <p className="form__message body-base">
        Delete your account and all your data
      </p>
    </form>
  );
}
