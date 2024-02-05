"use client";

import { useFormState } from "react-dom";
import classNames from "classnames";
import TextInput from "@/app/ui/inputs/TextInput";
import Button from "@/app/ui/actionables/buttons/Button";
import { changePasswordAction } from "@/app/lib/actions/user.action";

interface ProfileManageAccountFormProps {
  userId: string;
  customClasses?: string;
}

export default function ProfileManageAccountForm({
  userId,
  customClasses,
}: ProfileManageAccountFormProps) {
  const classes = classNames("form", customClasses);

  const initialState = { message: "", errors: {} };
  const changePassword = changePasswordAction.bind(null, userId);
  const [state, dispatch] = useFormState(changePassword, initialState);

  return (
    <form className={classes} action={dispatch}>
      {/* New Password */}
      <TextInput
        name="new_password"
        label="New Password"
        id="new_password"
        placeholder="New Password"
        type="password"
        error={state?.errors?.newPassword?.join(", ")}
      />

      {/* Confirm Password */}
      <TextInput
        name="confirm_password"
        label="Confirm Password"
        id="confirm_password"
        placeholder="Confirm Password"
        type="password"
        error={state?.errors?.confirmPassword?.join(", ")}
      />

      <Button type="submit" label="Update Profile" />

      {state.message && (
        <p className="form__error body-base">{state.message}</p>
      )}
    </form>
  );
}
