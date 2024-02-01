"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";
import TextInput from "@/app/ui/inputs/TextInput";
import { register } from "@/app/lib/actions/auth.action";

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
      <TextInput
        name="name"
        id="name"
        type="text"
        label="Name"
        placeholder="Name"
        error={state.errors?.name?.join(", ")}
      />

      {/* Email */}
      <TextInput
        name="email"
        id="email"
        type="email"
        label="Email"
        placeholder="Email"
        error={state.errors?.email?.join(", ")}
      />

      {/* Password */}
      <TextInput
        name="password"
        id="password"
        type="password"
        label="Password"
        placeholder="Password"
        error={state.errors?.password?.join(", ")}
      />

      {/* Confirm Password */}
      <TextInput
        name="confirm_password"
        id="confirm_password"
        type="password"
        label="Confirm Password"
        placeholder="Confirm Password"
        error={state.errors?.confirmPassword?.join(", ")}
      />

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
  return <Button type="submit" label="Register" disabled={pending} />;
}
