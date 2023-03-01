export type SummarySaleEntry = {
  _id: string;
  totalSales: number;
};

export default interface Summary {
  productCount: number;
  orderCount: number;
  userCount: number;
  ordersPrice: number;
  salesData: Array<SummarySaleEntry>;
}
