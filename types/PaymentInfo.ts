export type PaymentMethod = "paypal" | "credit_card" | "in_person";

export default interface PaymentInfo {
  paymentMethod: PaymentMethod;
}
