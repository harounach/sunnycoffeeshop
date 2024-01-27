"use client";

import Link from "next/link";
import classNames from "classnames";
import { useFormState, useFormStatus } from "react-dom";
import { register } from "@/app/lib/actions/auth";

interface RegisterFormProps {
  customClasses?: string;
}

export default function RegisterForm({ customClasses }: RegisterFormProps) {
  const classes = classNames("form", customClasses);

  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(register, initialState);

  return (
    <form className={classes} action={dispatch}>
      {/* Name */}
      <div className="text-input">
        <label className="label text-input__label" htmlFor="name">
          Name
        </label>
        <input
          className="text-input__input"
          placeholder="Name"
          type="text"
          name="name"
          id="name"
        />
        {state.errors?.name && (
          <p className="text-input__error body-base">
            {state.errors?.name?.join(", ")}
          </p>
        )}
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
        {state.errors?.email && (
          <p className="text-input__error body-base">
            {state.errors?.email?.join(", ")}
          </p>
        )}
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
        {state.errors?.password && (
          <p className="text-input__error body-base">
            {state.errors?.password?.join(", ")}
          </p>
        )}
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
        {state.errors?.confirmPassword && (
          <p className="text-input__error body-base">
            {state.errors?.confirmPassword?.join(", ")}
          </p>
        )}
      </div>

      <RegisterButton />
      <p className="form__message body-base">
        {"Already have an account?"}{" "}
        <Link className="form__link" href="/login">
          Login
        </Link>
      </p>

      {state.message && (
        <p className="form__error body-base">{state.message}</p>
      )}
    </form>
  );
}

function RegisterButton() {
  const { pending } = useFormStatus();
  return (
    <button className="btn" type="submit" aria-disabled={pending}>
      Register
    </button>
  );
}
