import classNames from "classnames";

interface MenuButtonProps {
  open?: boolean;
  onOpen: () => void;
  customClasses?: string;
}

export default function MenuButton({ open, onOpen, customClasses }: MenuButtonProps) {
  const classes = classNames(
    "menu-btn",
    { "menu-btn--open": open },
    customClasses,
  );
  return (
    <button className={classes} aria-label="Menu button" onClick={() => onOpen()}>
      <span className="menu-btn__bar"></span>
      <span className="menu-btn__bar"></span>
      <span className="menu-btn__bar"></span>
    </button>
  );
}
