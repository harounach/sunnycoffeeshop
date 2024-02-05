import dbConnect from "@/app/lib/database/dbConnect";
import {
  UserModel,
  ProductModel,
  OrderModel,
  ReviewModel,
} from "@/app/lib/database/models";
import { createReview } from "@/app/lib/database/review/review.mutation";
import { Product, User } from "@/app/lib/definitions";
import { users, products } from "@/app/lib/placeholder-data";
import { HydratedDocument } from "mongoose";

/**
 * Seed users
 */
async function seedUsers() {
  const allUsers = users.map((user) => {
    return {
      name: user.name,
      email: user.email,
      passwordHash: user.passwordHash,
      role: user.role,
    };
  });
  await UserModel.deleteMany();
  await UserModel.insertMany(allUsers);
}

/**
 * Seed products
 */
async function seedProducts() {
  const allProducts = products.map((product) => {
    return {
      title: product.title,
      desc: product.desc,
      price: product.price,
      image: product.image,
      slug: product.slug,
      rating: product.rating,
      numReviews: product.numReviews,
      isFeatured: product.isFeatured,
    };
  });

  await ProductModel.deleteMany();
  await ProductModel.insertMany(allProducts);
}

/**
 * Seed reviews
 */
async function seedReviews() {
  await ReviewModel.deleteMany();

  const allReviews = [
    // User1 review
    {
      rating: 5,
      comment:
        "Cake jujubes biscuit gingerbread lollipop pie. Marshmallow donut sweet roll muffin sweet pudding ice cream biscuit. Soufflé donut tootsie roll oat cake icing chupa chups jujubes. Gummies cookie pastry pastry jujubes dragée sesame snaps jelly.",
    },

    // User2 review
    {
      rating: 1,
      comment:
        "Sugar plum sugar plum marshmallow chocolate bar sweet roll. Pudding chocolate icing sesame snaps croissant. Wafer chupa chups liquorice jujubes bear claw candy canes.",
    },

    // User3 review
    {
      rating: 3,
      comment:
        "Donut topping pudding cake tootsie roll cake. Chocolate cake marzipan icing dragée cake jujubes icing. Sweet roll ice cream chupa chups caramels brownie marzipan pie. Chocolate cake cookie muffin tart jelly-o muffin soufflé tart.",
    },
  ];

  // Add reviews
  const productToReview = await ProductModel.findOne<HydratedDocument<Product>>(
    { title: "Latte" },
  );
  const user1 = await UserModel.findOne<HydratedDocument<User>>({
    email: "user1@email.com",
  });
  const user2 = await UserModel.findOne<HydratedDocument<User>>({
    email: "user2@email.com",
  });
  const user3 = await UserModel.findOne<HydratedDocument<User>>({
    email: "user3@email.com",
  });

  if (productToReview && user1 && user2 && user3) {
    // review 1
    await createReview(
      user1.name,
      user1.email,
      productToReview._id.toString(),
      allReviews[0].rating,
      allReviews[0].comment,
    );

    // review 2
    await createReview(
      user2.name,
      user2.email,
      productToReview._id.toString(),
      allReviews[1].rating,
      allReviews[1].comment,
    );

    // review 3
    await createReview(
      user3.name,
      user3.email,
      productToReview._id.toString(),
      allReviews[2].rating,
      allReviews[2].comment,
    );
  }
}

/**
 * Seed orders
 */
async function seedOrders() {
  await OrderModel.deleteMany();
}

export async function GET(request: Request) {
  try {
    await dbConnect();

    // Seed users
    await seedUsers();

    // Seed products
    await seedProducts();

    // Seed reviews
    await seedReviews();

    // Seed orders
    await seedOrders();

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
