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
          <a className="nav__link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav__link" href="/products">
            Shop
          </a>
        </li>
        <li>
          <a className="nav__link" href="/cart">
            <CartButton />
          </a>
        </li>
        <li>
          <Button url="/login" label="Label" customClasses="nav__link" />
        </li>
      </ul>
    </nav>
  );
}
