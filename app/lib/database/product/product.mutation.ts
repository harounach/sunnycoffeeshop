import { ProductModel } from "@/app/lib/database/models";

export async function createProduct(
  title: string,
  desc: string,
  price: number,
  image: string,
  slug: string,
) {
  try {
    // Create product in database
    const productToAdd = new ProductModel({
      title,
      desc,
      price,
      image,
      slug,
    });

    await productToAdd.save();
  } catch (err) {
    console.error(err);
  }
}

export async function updateProduct(
  id: string,
  title: string,
  desc: string,
  price: number,
  image: string,
  slug: string,
) {
  try {
    // Find product in the database
    const productToUpdate = await ProductModel.findById(id).exec();

    // Now update the product
    productToUpdate.title = title;
    productToUpdate.desc = desc;
    productToUpdate.price = price;
    productToUpdate.image = image;
    productToUpdate.slug = slug;
    await productToUpdate.save();
  } catch (err) {
    console.error(err);
  }
}

export async function deleteProduct(id: string) {
  try {
    // Find the product with this id
    const productToDelete = await ProductModel.findById(id).exec();
    await productToDelete.deleteOne();
  } catch (err) {
    console.error(err);
  }
}
