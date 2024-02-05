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

// Number of items per page
const LIMIT = 8;

/*
 * Fetch filtered users
 */
export async function fetchFilteredUsers(query: string, currentPage: number) {
  try {
    await dbConnect();
    const searchFilter = query
      ? {
          name: {
            $regex: query,
            $options: "i",
          },
        }
      : {};

    const rawUsers = await UserModel.find(searchFilter)
      .sort({ createdAt: 1 })
      .limit(LIMIT * 1)
      .skip((currentPage - 1) * LIMIT)
      .select("-passwordHash")
      .lean()
      .exec();

    const users = rawUsers.map((user) => {
      return {
        ...user,
        _id: user?._id?.toString(),
      };
    });

    return users as User[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch filtered users.");
  }
}

/**
 * Fetch user pages
 * */
export async function fetchUsersPages(query: string) {
  try {
    await dbConnect();
    const searchFilter = query
      ? {
          name: {
            $regex: query,
            $options: "i",
          },
        }
      : {};

    const count = await UserModel.countDocuments(searchFilter);
    const totalPages = Math.ceil(count / LIMIT);

    return totalPages as number;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch total number of users pages.");
  }
}
