import Link from "next/link";
import classNames from "classnames";
import TextInput from "../../inputs/TextInput";
import Button from "@/app/ui/actionables/buttons/Button";

interface LoginFormProps {
  customClasses?: string;
}

export default function LoginForm({ customClasses }: LoginFormProps) {
  const classes = classNames("form", customClasses);

  return (
    <form className={classes}>
      {/* Email */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="email">
          Email
        </label>
        <input
          className="text-input__input"
          placeholder="Email"
          type="email"
          name="email"
          id="email"
        />
        <p className="text-input__error body-base"></p>
      </div>

      {/* Password */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="password">
          Password
        </label>
        <input
          className="text-input__input"
          placeholder="Password"
          type="password"
          name="password"
          id="password"
        />
        <p className="text-input__error body-base"></p>
      </div>

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
