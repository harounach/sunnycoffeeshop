import Link from "next/link";
import classNames from "classnames";
import Button from "@/app/ui/actionables/buttons/Button";
import CartButton from "@/app/ui/actionables/buttons/CartButton";

import { auth } from "@/auth";

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
          <AuthButton />
        </li>
      </ul>
    </nav>
  );
}

async function AuthButton() {
  const auths = await auth();
  const isLoggedIn = !!auths?.user;

  if(isLoggedIn) return <Link href="/account" className="btn">Account</Link>;

  return <Link href="/login" className="btn">Login</Link>;
}
