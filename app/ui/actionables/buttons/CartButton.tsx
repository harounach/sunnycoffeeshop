import { CartFill } from "react-bootstrap-icons";
import IconButton from "@/app/ui/actionables/buttons/IconButton";

interface CartButtonProps {
  customClasses?: string;
}

export default function CartButton({ customClasses }: CartButtonProps) {
  return (
    <div className="cart-btn">
      <IconButton customClasses="cart-btn__btn">
        <CartFill />
      </IconButton>
      <span className="cart-btn__value">2</span>
    </div>
  );
}
