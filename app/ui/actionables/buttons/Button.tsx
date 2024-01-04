import Link from "next/link";
import classNames from "classnames";

interface ButtonProps {
  label: string;
  variant?: "danger" | "neutral";
  url?: string;
  type?: "button" | "submit" | "reset";
  customeClasses?: string;
}

export default function Button({
  label,
  variant,
  url,
  type,
  customeClasses,
}: ButtonProps) {
  const classes = classNames(
    "btn",
    { "btn--danger": variant === "danger" },
    { "btn--neutral": variant === "neutral" },
    customeClasses
  );
  // If there is a "url" prop we want to the button to be a link
  if (url) {
    return (
      <Link href={url} className={classes}>
        {label}
      </Link>
    );
  }

  // otherwise we just return button element
  const buttonType = type ? type : "button";
  return (
    <button className={classes} type={buttonType}>
      {label}
    </button>
  );
}