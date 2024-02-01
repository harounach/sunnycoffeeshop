import { revalidatePath } from "next/cache";
import { deleteUser } from "@/app/lib/database/user/user.mutation";

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
