"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  deleteUser,
  changePassword,
} from "@/app/lib/database/user/user.mutation";
import { signOut } from "@/auth";

export type ProductState = {
  message?: string | null;
};

export async function deleteUserAction(
  userId: string,
  prevState: ProductState,
  formData: FormData,
) {
  try {
    await deleteUser(userId);
  } catch (err) {
    console.error(err);
    return {
      message: "Database Error: Failed to Delete User.",
    };
  }

  // Revalidate the cache for the admin products page and redirect the user.
  revalidatePath("/admin/users");

  return {
    message: "User deleted successfuly.",
  };
}

const ChangePasswordSchema = z.object({
  newPassword: z
    .string()
    .min(4, { message: "New Password must be 4 or more characters long" }),
  confirmPassword: z
    .string()
    .min(4, { message: "Confirm Password must be 4 or more characters long" }),
});

export type ChangePasswordState = {
  errors?: {
    newPassword?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};

export async function changePasswordAction(
  userId: string,
  prevState: ChangePasswordState,
  formData: FormData,
) {
  // Validate form fields using Zod
  const validatedFields = ChangePasswordSchema.safeParse({
    newPassword: formData.get("new_password"),
    confirmPassword: formData.get("confirm_password"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Change Password.",
    };
  }

  const { newPassword, confirmPassword } = validatedFields.data;

  // compare password
  if (newPassword !== confirmPassword) {
    return { message: "Passwords do not match" };
  }

  try {
    // Save new password in the database
    await changePassword(userId, newPassword);
    await signOut();
    return {
      message: "Password changed successfully",
    };
  } catch (err) {
    console.error(err);
    return {
      message: "Database Error: Failed to Change Password.",
    };
  }
}
