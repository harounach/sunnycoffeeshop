import type { Product } from "./definitions";
import bcrypt from "bcryptjs";

export const users = [
  {
    name: process.env.ADMIN_NAME,
    email: process.env.ADMIN_EMAIL,
    passwordHash: bcrypt.hashSync(process.env.ADMIN_PASSWORD as string),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "user@hwiren.com",
    passwordHash: bcrypt.hashSync("1234"),
    isAdmin: false,
  },
];

export const products = [
  // 01
  {
    _id: "coffee-01",
    title: "Black Coffee",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/01-black-coffee.jpg",
    slug: "black-coffee",
  },

  // 02
  {
    _id: "coffee-02",
    title: "Latte",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/02-latte.jpg",
    slug: "latte",
  },

  // 03
  {
    _id: "coffee-03",
    title: "Cappuccino",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/03-cappuccino.jpg",
    slug: "cappuccino",
  },

  // 04
  {
    _id: "coffee-04",
    title: "Americano",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/04-americano.jpg",
    slug: "americano",
  },

  // 05
  {
    _id: "coffee-05",
    title: "Espresso",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/05-espresso.jpg",
    slug: "espresso",
  },

  // 06
  {
    _id: "coffee-06",
    title: "Doppio",
    desc: "Doppio",
    price: 3.5,
    image: "/images/06-doppio.jpg",
    slug: "doppio",
  },

  // 07
  {
    _id: "coffee-07",
    title: "Cortado",
    desc: "Cortado",
    price: 3.5,
    image: "/images/07-cortado.jpg",
    slug: "cortado",
  },

  // 08
  {
    _id: "coffee-08",
    title: "Red Eye",
    desc: "Red Eye",
    price: 3.5,
    image: "/images/08-red-eye.jpg",
    slug: "red-eye",
  },

  // 09
  {
    _id: "coffee-09",
    title: "Galao",
    desc: "Galao",
    price: 3.5,
    image: "/images/09-galao.jpg",
    slug: "galao",
  },

  // 10
  {
    _id: "coffee-10",
    title: "Lungo",
    desc: "Lungo",
    price: 3.5,
    image: "/images/10-lungo.jpg",
    slug: "lungo",
  },

  // 11
  {
    _id: "coffee-11",
    title: "Macchiato",
    desc: "Macchiato",
    price: 3.5,
    image: "/images/11-macchiato.jpg",
    slug: "macchiato",
  },

  // 12
  {
    _id: "coffee-12",
    title: "Mocha",
    desc: "Mocha",
    price: 3.5,
    image: "/images/12-mocha.jpg",
    slug: "mocha",
  },

  // 13
  {
    _id: "coffee-13",
    title: "Ristretto",
    desc: "Ristretto",
    price: 3.5,
    image: "/images/13-ristretto.jpg",
    slug: "ristretto",
  },

  // 14
  {
    _id: "coffee-14",
    title: "Flat White",
    desc: "Flat White",
    price: 3.5,
    image: "/images/14-flat-white.jpg",
    slug: "flat-white",
  },

  // 15
  {
    _id: "coffee-15",
    title: "Affogato",
    desc: "Affogato",
    price: 3.5,
    image: "/images/15-affogato.jpg",
    slug: "affogato",
  },

  // 16
  {
    _id: "coffee-16",
    title: "Cafe Au Lait",
    desc: "Cafe Au Lait",
    price: 3.5,
    image: "/images/16-cafe-au-lait.jpg",
    slug: "cafe-au-lait",
  },

  // 17
  {
    _id: "coffee-17",
    title: "Irish",
    desc: "Irish",
    price: 3.5,
    image: "/images/17-irish.jpg",
    slug: "irish",
  },

  // 18
  {
    _id: "coffee-18",
    title: "Iced Espresso",
    desc: "Iced Espresso",
    price: 3.5,
    image: "/images/18-iced-espresso.jpg",
    slug: "iced-espresso",
  },

  // 19
  {
    _id: "coffee-19",
    title: "Cold Brew",
    desc: "Cold Brew",
    price: 3.5,
    image: "/images/19-cold-brew.jpg",
    slug: "cold-brew",
  },

  // 20
  {
    _id: "coffee-20",
    title: "Iced Latte",
    desc: "Iced Latte",
    price: 3.5,
    image: "/images/20-iced-latte.jpg",
    slug: "iced-latte",
  },

  // 21
  {
    _id: "coffee-21",
    title: "Iced Americano",
    desc: "Iced Americano",
    price: 3.5,
    image: "/images/21-iced-americano.jpg",
    slug: "iced-americano",
  },

  // 22
  {
    _id: "coffee-22",
    title: "Iced Mocha",
    desc: "Iced Mocha",
    price: 3.5,
    image: "/images/22-iced-mocha.jpg",
    slug: "iced-mocha",
  },
];

// reviews
export const reviews = [
  {
    _id: "review_01",
    user_name: "John Doe",
    rating: 4,
    date: "12 Dec 2024",
    comment:
      "Sugar plum toffee halvah chupa chups lollipop tootsie roll fruitcake cake. Oat cake soufflé donut jelly-o pudding jelly. Macaroon muffin chocolate bar macaroon pie cookie sugar plum.",
  },

  {
    _id: "review_02",
    user_name: "Peter Smith",
    rating: 5,
    date: "10 Nov 2024",
    comment:
      "Gingerbread biscuit sweet bonbon shortbread. Tootsie roll sugar plum lemon drops pudding cookie. Dessert powder pie candy croissant bear claw carrot cake liquorice carrot cake. ",
  },

  {
    _id: "review_03",
    user_name: "Barbara Jackson",
    rating: 3.5,
    date: "7 Aug 2024",
    comment:
      "Apple pie tootsie roll chocolate gingerbread brownie biscuit. Fruitcake sweet roll candy canes halvah tiramisu gummi bears croissant. Gummies shortbread pastry marzipan oat cake.",
  },
];

// cart
export const cartProducts = [
  // 01
  {
    _id: "coffee-01",
    title: "Black Coffee",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/01-black-coffee.jpg",
  },

  // 02
  {
    _id: "coffee-02",
    title: "Latte",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/02-latte.jpg",
  },

  // 03
  {
    _id: "coffee-03",
    title: "Cappuccino",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/03-cappuccino.jpg",
  },
];

// order

const shippingData = {
  first_name: "John",
  last_name: "Doe",
  email: "johndoe@emai.com",
  street: "Martin Luther King Boulevard",
  city: "Houston",
  state: "TX",
  zip_code: "4200",
  country: "United States",
};

const paymentData = {
  paymentMethod: "PayPal",
};

const orderItems = [
  // 01
  {
    _id: "coffee-01",
    title: "Black Coffee",
    price: 3.5,
    image: "/images/01-black-coffee.jpg",
    qty: 2,
    product_id: "coffee-01",
  },

  // 02
  {
    _id: "coffee-02",
    title: "Latte",
    price: 3.5,
    image: "/images/02-latte.jpg",
    qty: 2,
    product_id: "coffee-02",
  },

  // 03
  {
    _id: "coffee-03",
    title: "Cappuccino",
    price: 3.5,
    image: "/images/03-cappuccino.jpg",
    qty: 1,
    product_id: "coffee-03",
  },
];

export const ordersData = [
  {
    _id: "order_1",
    user: "John Doe",
    orderItems: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 16,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 21,
    isPaid: false,
    paidAt: "12 Dec 2022",
    isDelivered: false,
    deliveredAt: "12 Dec 2022",
    createdAt: "12 Dec 2022",
  },

  {
    _id: "order_2",
    user: "Sarah Campbell",
    orderItems: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 20,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 25,
    isPaid: true,
    paidAt: "7 Jan 2024",
    isDelivered: false,
    deliveredAt: "12 Jan 2024",
    createdAt: "7 Jan 2024",
  },

  {
    _id: "order_3",
    user: "Richard Smith",
    orderItems: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 25,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 30,
    isPaid: true,
    paidAt: "23 Aug 2024",
    isDelivered: true,
    deliveredAt: "24 Aug 2024",
    createdAt: "23 Aug 2024",
  },
];

// Favorite products
export const favoriteProducts = [
  // 01
  {
    _id: "coffee-01",
    title: "Black Coffee",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/01-black-coffee.jpg",
    slug: "black-coffee",
  },

  // 02
  {
    _id: "coffee-02",
    title: "Latte",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/02-latte.jpg",
    slug: "latte",
  },

  // 03
  {
    _id: "coffee-03",
    title: "Cappuccino",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/03-cappuccino.jpg",
    slug: "cappuccino",
  },

  // 04
  {
    _id: "coffee-04",
    title: "Americano",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/04-americano.jpg",
    slug: "Americano",
  },

  // 05
  {
    _id: "coffee-05",
    title: "Espresso",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/05-espresso.jpg",
    slug: "Espresso",
  },
];

export const barChartData = [
  {
    label: "January",
    totalSales: 20,
  },

  {
    label: "February",
    totalSales: 15,
  },

  {
    label: "March",
    totalSales: 25,
  },
];

export const donutChartData = [
  {
    title: "Black Coffee",
    totalSales: 20,
  },

  {
    title: "Latte",
    totalSales: 22,
  },

  {
    title: "Americano",
    totalSales: 19,
  },

  {
    title: "Espresso",
    totalSales: 31,
  },

  {
    title: "Mocha",
    totalSales: 23,
  },
];
