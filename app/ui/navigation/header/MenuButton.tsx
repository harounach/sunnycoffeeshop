import classNames from "classnames";

interface MenuButtonProps {
  open?: boolean;
  customeClasses?: string;
}

export default function MenuButton({ open, customeClasses }: MenuButtonProps) {
  const classes = classNames(
    "menu-btn",
    { "menu-btn--open": open },
    customeClasses,
  );
  return (
    <button className={classes} aria-label="Menu button">
      <span className="menu-btn__bar"></span>
      <span className="menu-btn__bar"></span>
      <span className="menu-btn__bar"></span>
    </button>
  );
}
