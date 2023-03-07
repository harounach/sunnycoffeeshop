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

export const truncateText = (input: string) => {
  if (input.length > 5) {
    return input.substring(0, 5) + "...";
  }
  return input;
};
