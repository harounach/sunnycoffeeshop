import dbConnect from "@/app/lib/dbConnect";
import { UserModel, ProductModel } from "@/app/lib/models";
import { users, products } from "@/app/lib/placeholder-data";

const allProducts = products.map((product) => {
  return {
    title: product.title,
    desc: product.desc,
    price: product.price,
    image: product.image,
    slug: product.slug,
  };
});

export async function GET(request: Request) {
  try {
    await dbConnect();
    await UserModel.deleteMany();
    await UserModel.insertMany(users);

    await ProductModel.deleteMany();
    await ProductModel.insertMany(allProducts);

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
