import classNames from "classnames";
import Logo from "@/app/ui/brand/Logo";
import Navigation from "./Navigation";
import MenuButton from "./MenuButton";
import Searchbar from "@/app/ui/inputs/Searchbar";

interface HeaderProps {
  customClasses?: string;
}

export default function Header({ customClasses }: HeaderProps) {
  const classes = classNames("header", customClasses);
  return (
    <header className={classes}>
      <a href="#content" className="skip">
        Skip to content
      </a>
      <div className="container">
        <div className="header__content">
          <Logo customClasses="header__logo" />
          <div className="header__nav">
            <Navigation />
          </div>
          <div className="header__menu-btn">
            <MenuButton />
          </div>
        </div>
      </div>
    </header>
  );
}
