import classNames from "classnames";
import Logo from "@/app/ui/brand/Logo";
import Navigation from "./Navigation";
import { auth } from "@/auth";

interface HeaderProps {
  customClasses?: string;
}

export default async function Header({ customClasses }: HeaderProps) {
  const classes = classNames("header", customClasses);
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const isAdmin = session?.user?.role === "admin";

  return (
    <header className={classes}>
      <a href="#content" className="skip">
        Skip to content
      </a>
      <div className="container">
        <div className="header__content">
          <Logo customClasses="header__logo" />
          <Navigation isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
        </div>
      </div>
    </header>
  );
}
