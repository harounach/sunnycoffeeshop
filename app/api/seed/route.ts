import dbConnect from "@/app/lib/dbConnect";
import { UserModel } from "@/app/lib/models";
import { users } from "@/app/lib/placeholder-data";

export async function GET(request: Request) {
  try {
    await dbConnect();
    await UserModel.deleteMany();
    await UserModel.insertMany(users);
    return Response.json({
      message: "seeded successfully",
    });
  } catch (err) {
    console.error(err);
    return Response.json({
      message: "failed to seed the database",
    });
  }
}
