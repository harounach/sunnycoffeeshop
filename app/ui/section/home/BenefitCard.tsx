import classNames from "classnames";

interface BenefitCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  customClasses?: string;
}

export default function BenefitCard({
  title,
  desc,
  icon,
  customClasses,
}: BenefitCardProps) {
  const classes = classNames("benefit-card", customClasses);
  return (
    <div className={classes}>
      <div className="benefit-card__img">{icon}</div>
      <div className="benefit-card__content">
        <h3 className="benefit-card__title title-base">{title}</h3>
        <p className="benefit-card__desc body-base text-sm">{desc}</p>
      </div>
    </div>
  );
}
