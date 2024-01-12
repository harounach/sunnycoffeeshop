import classNames from "classnames";

interface DashboardInfoCardProps {
  label: string;
  value: string;
  color: "blue" | "green" | "orange";
  customClasses?: string;
  children: React.ReactNode;
}

export default function DashboardInfoCard({
  label,
  color,
  value,
  customClasses,
  children,
}: DashboardInfoCardProps) {
  const classes = classNames("dashboard-info-card", customClasses);

  const iconClasses = classNames(
    "dashboard-info-card__icon",
    { blue: color === "blue" },
    { green: color === "green" },
    { orange: color === "orange" },
  );

  return (
    <div className={classes}>
      <div className={iconClasses}>{children}</div>
      <div className="dashboard-info-card__content">
        <span className="dashboard-info-card__label title-base">{label}</span>
        <span className="dashboard-info-card__value body-base">{value}</span>
      </div>
    </div>
  );
}
