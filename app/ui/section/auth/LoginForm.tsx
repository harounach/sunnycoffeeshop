"use client";

import Link from "next/link";
import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions/auth";

interface LoginFormProps {
  customClasses?: string;
}

export default function LoginForm({ customClasses }: LoginFormProps) {
  const classes = classNames("form", customClasses);
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form className={classes} action={dispatch}>
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
      </div>

      <LoginButton />
      <p className="form__message body-base">
        {"Don't have an account?"}{" "}
        <Link className="form__link" href="/register">
          Register
        </Link>
      </p>

      {errorMessage && (
        <>
          <p className="form__error">{errorMessage}</p>
        </>
      )}
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return <Button type="submit" label="Login" disabled={pending} />;
}
