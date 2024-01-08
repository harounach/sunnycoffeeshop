import Link from "next/link";
import classNames from "classnames";
import TextInput from "./TextInput";
import Button from "@/app/ui/actionables/buttons/Button";

interface LoginFormProps {
  customClasses?: string;
}

export default function LoginForm({ customClasses }: LoginFormProps) {
  const classes = classNames("form", customClasses);

  return (
    <form className={classes}>
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

      <Button type="submit" label="Login" />
      <p className="form__message body-base">
        {"Don't have an account?"}{" "}
        <Link className="form__link" href="/register">
          Register
        </Link>
      </p>
    </form>
  );
}
