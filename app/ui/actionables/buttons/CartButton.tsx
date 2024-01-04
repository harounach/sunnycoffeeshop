import { CartFill } from "react-bootstrap-icons";
import IconButton from "@/app/ui/actionables/buttons/IconButton";

interface CartButtonProps {
	customeClasses?: string;
}

export default function CartButton({ customeClasses }: CartButtonProps) {
	return (
		<div className="cart-btn">
			<IconButton customeClasses="cart-btn__btn">
				<CartFill />
			</IconButton>
			<span className="cart-btn__value">2</span>
		</div>
	);
}
