import classNames from "classnames";

interface ButtonProps {
  label: string;
  variant?: "danger" | "neutral";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  customClasses?: string;
}

export default function Button({
  label,
  variant,
  type,
  disabled,
  customClasses,
}: ButtonProps) {
  const classes = classNames(
    "btn",
    { "btn--danger": variant === "danger" },
    { "btn--neutral": variant === "neutral" },
    customClasses,
  );

  const buttonType = type ? type : "button";
  return (
    <button
      className={classes}
      type={buttonType}
      aria-disabled={disabled ?? false}
    >
      {label}
    </button>
  );
}
