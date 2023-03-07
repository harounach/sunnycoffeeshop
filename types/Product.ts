export default interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  favoritedBy: Array<string>;
}
