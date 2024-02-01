import Link from "next/link";
import classNames from "classnames";

interface LinkButtonProps {
  label: string;
  variant?: "danger" | "neutral";
  url: string;
  disabled?: boolean;
  customClasses?: string;
}

export default function LinkButton({
  label,
  variant,
  url,
  disabled,
  customClasses,
}: LinkButtonProps) {
  const classes = classNames(
    "btn",
    { "btn--danger": variant === "danger" },
    { "btn--neutral": variant === "neutral" },
    customClasses,
  );

  return (
    <Link href={url} className={classes} aria-disabled={disabled ?? false}>
      {label}
    </Link>
  );
}
