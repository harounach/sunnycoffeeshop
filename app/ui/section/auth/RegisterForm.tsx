import Link from "next/link";
import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";

interface RegisterFormProps {
  customClasses?: string;
}

export default function RegisterForm({ customClasses }: RegisterFormProps) {
  const classes = classNames("form", customClasses);

  return (
    <form className={classes}>
      {/* Username */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="username">
          Username
        </label>
        <input
          className="text-input__input"
          placeholder="Username"
          type="text"
          name="username"
          id="username"
        />
        <p className="text-input__error body-base"></p>
      </div>

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

      {/* Confirm Password */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="confirm_password">
          Confirm Password
        </label>
        <input
          className="text-input__input"
          placeholder="Confirm Password"
          type="password"
          name="confirm_password"
          id="confirm_password"
        />
        <p className="text-input__error body-base"></p>
      </div>

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
