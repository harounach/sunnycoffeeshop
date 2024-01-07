export type Product = {
  _id: string;
  title: string;
  desc: string;
  price: number;
  image: string;
};

export type Review = {
  _id: string;
  user_name: string;
  rating: number;
  date: string;
  comment: string;
};
