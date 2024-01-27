import { UserModel } from "@/app/lib/database/models";
import { generateHashedPassword } from "@/app/lib/utils/auth";

export async function createUser(
  name: string,
  email: string,
  password: string,
) {
  try {
    // Hash password
    const passwordHash = await generateHashedPassword(password);

    // Create and save user
    const newUser = new UserModel({
      name,
      email,
      passwordHash,
    });
    await newUser.save();
  } catch (err) {
    console.error(err);
  }
}

export async function deleteUser() {}
