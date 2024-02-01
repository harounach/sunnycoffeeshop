import Link from "next/link";
import classNames from "classnames";
import CartButton from "@/app/ui/actionables/buttons/CartButton";
import LinkButton from "../../actionables/buttons/LinkButton";

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

  if (isLoggedIn) return <LinkButton url="/account" label="Account" />;

  return <LinkButton url="/login" label="Login" />;
}
