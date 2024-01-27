import dbConnect from "@/app/lib/database/dbConnect";
import { User } from "@/app/lib/definitions";
import { UserModel } from "@/app/lib/database/models";

export async function getUsers() {}

export async function getUserByEmail(email: string) {
  try {
    await dbConnect();
    const user = await UserModel.findOne({ email }).lean().exec();
    return user as User;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user.");
  }
}
