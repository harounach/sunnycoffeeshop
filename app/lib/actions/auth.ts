"use server";

import { z } from "zod";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/app/lib/database/user/user.query";
import { redirect } from "next/navigation";
import { createUser } from "@/app/lib/database/user/user.mutation";

const RegisterSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be 4 or more characters long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Password must be 4 or more characters long" }),
  confirmPassword: z
    .string()
    .min(4, { message: "Confirm Password must be 4 or more characters long" }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};

export async function register(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirm_password"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register",
    };
  }

  const { name, email, password, confirmPassword } = validatedFields.data;

  // compare password
  if (password !== confirmPassword) {
    return { message: "Passwords do not match" };
  }

  try {
    // Check if email exist
    const userWithEmail = await getUserByEmail(email);
    if (userWithEmail) {
      return { message: "Email is already in use" };
    }

    // Create and save user
    await createUser(name, email, password);
  } catch (err) {
    console.error(err);
    return {
      message: "Database Error: Failed to Register.",
    };
  }

  // authenticate user
  redirect("/login");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }

    throw err;
  }
}

export async function logout(formData: FormData) {
    await signOut();
}
