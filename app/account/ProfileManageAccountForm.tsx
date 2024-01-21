import classNames from "classnames";
import TextInput from "@/app/ui/inputs/TextInput";
import Button from "@/app/ui/actionables/buttons/Button";

interface ProfileManageAccountFormProps {
  customClasses?: string;
}

export default function ProfileManageAccountForm({
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
