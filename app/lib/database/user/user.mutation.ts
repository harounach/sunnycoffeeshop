import { UserModel } from "@/app/lib/database/models";
import { generateHashedPassword } from "@/app/lib/utils/auth";
import { HydratedDocument } from "mongoose";
import { User } from "@/app/lib/definitions";

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

export async function deleteUser(userId: string) {
  try {
    const userToDelete =
      await UserModel.findById<HydratedDocument<User>>(userId).exec();
    if (userToDelete) {
      await userToDelete.deleteOne();
    }
  } catch (err) {
    console.error(err);
  }
}

export async function changePassword(userId: string, newPassword: string) {
  try {
    const userToChangePassword =
      await UserModel.findById<HydratedDocument<User>>(userId);
    if (userToChangePassword) {
      // Hash password
      const passwordHash = await generateHashedPassword(newPassword);
      userToChangePassword.passwordHash = passwordHash;
      await userToChangePassword.save();
    }
  } catch (err) {
    console.error(err);
  }
}
