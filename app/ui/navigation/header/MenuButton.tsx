import classNames from "classnames";

interface MenuButtonProps {
  open?: boolean;
  customClasses?: string;
}

export default function MenuButton({ open, customClasses }: MenuButtonProps) {
  const classes = classNames(
    "menu-btn",
    { "menu-btn--open": open },
    customClasses,
  );
  return (
    <button className={classes} aria-label="Menu button">
      <span className="menu-btn__bar"></span>
      <span className="menu-btn__bar"></span>
      <span className="menu-btn__bar"></span>
    </button>
  );
}
