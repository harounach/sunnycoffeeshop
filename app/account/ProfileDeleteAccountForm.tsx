import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";

interface ProfileDeleteAccountFormProps {
  customClasses?: string;
}

export default function ProfileDeleteAccountForm({
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
