import Link from "next/link";
import classNames from "classnames";
import TextInput from "./TextInput";
import Button from "@/app/ui/actionables/buttons/Button";

interface RegisterFormProps {
  customClasses?: string;
}

export default function RegisterForm({ customClasses }: RegisterFormProps) {
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
        name="password"
        label="Password"
        id="password"
        placeholder="Password"
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

      <Button type="submit" label="Register" />
      <p className="form__message body-base">
        {"Already have an account?"}{" "}
        <Link className="form__link" href="/login">
          Login
        </Link>
      </p>
    </form>
  );
}
