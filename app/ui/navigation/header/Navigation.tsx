import Link from "next/link";
import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";
import CartButton from "@/app/ui/actionables/buttons/CartButton";

interface NavigationProps {
  customClasses?: string;
}

export default function Navigation({ customClasses }: NavigationProps) {
  const classes = classNames("nav", customClasses);

  return (
    <nav className={classes}>
      <ul>
        <li>
          <Link className="nav__link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav__link" href="/products">
            Shop
          </Link>
        </li>
        <li>
          <CartButton />
        </li>
        <li>
          <Button url="/login" label="Login" />
        </li>
      </ul>
    </nav>
  );
}
