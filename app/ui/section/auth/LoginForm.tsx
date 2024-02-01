"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";
import TextInput from "@/app/ui/inputs/TextInput";
import { authenticate } from "@/app/lib/actions/auth.action";

interface LoginFormProps {
  customClasses?: string;
}

export default function LoginForm({ customClasses }: LoginFormProps) {
  const classes = classNames("form", customClasses);
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(authenticate, initialState);

  return (
    <form className={classes} action={dispatch}>
      {/* Email */}
      <TextInput
        name="email"
        id="email"
        type="email"
        label="Email"
        placeholder="Email"
      />

      {/* Password */}
      <TextInput
        name="password"
        id="password"
        type="password"
        label="Password"
        placeholder="Password"
      />

      <LoginButton />
      <p className="form__message body-base">
        {"Don't have an account?"}{" "}
        <Link className="form__link" href="/register">
          Register
        </Link>
      </p>

      {state?.message && (
        <p className="form__error body-base">{state.message}</p>
      )}
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return <Button type="submit" label="Login" disabled={pending} />;
}
