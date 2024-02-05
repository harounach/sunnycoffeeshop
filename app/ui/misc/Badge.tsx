import classNames from "classnames";

interface BadgeProps {
  label: string;
  color: "green" | "red";
}

export default function Badge({ label, color }: BadgeProps) {
  const classes = classNames(
    "badge",
    "body-base",
    { "badge--green": color === "green" },
    { "badge--red": color === "red" },
  );

  return <span className={classes}>{label}</span>;
}
