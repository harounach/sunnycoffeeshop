import { BsFillCartFill } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";

interface CartButtonProps {
  url: string;
  customClasses?: string;
}

export default function CartButton({ url, customClasses }: CartButtonProps) {
  return (
    <div className="cart-btn">
      <IconButton url={url} customClasses="cart-btn__btn">
        <BsFillCartFill />
      </IconButton>
      <span className="cart-btn__value">2</span>
    </div>
  );
}
