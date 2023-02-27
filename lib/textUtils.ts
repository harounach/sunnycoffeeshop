import { PaymentMethod } from "@/types/PaymentInfo";

export const getPaymentMethodText = (paymentMethod: PaymentMethod) => {
  switch (paymentMethod) {
    case "paypal":
      return "Paypal";
    case "credit_card":
      return "Credit Card";
    case "in_person":
      return "In Person";
  }
};
