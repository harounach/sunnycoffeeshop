import classNames from "classnames";
import Logo from "@/app/ui/navigation/logo/Logo";
import Navigation from "./Navigation";
import MenuButton from "./MenuButton";
import Searchbar from "@/app/ui/inputs/Searchbar";

interface HeaderProps {
  customeClasses?: string;
}

export default function Header({ customeClasses }: HeaderProps) {
  const classes = classNames("header", customeClasses);
  return (
    <header className={classes}>
      <a href="#content" className="skip">
        Skip to content
      </a>
      <div className="container">
        <div className="header__content">
          <Logo customClasses="header__logo" />
          <div className="header__search">
            <Searchbar />
          </div>
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
