import classNames from "classnames";

interface SelectProps {
  name: string;
  label: string;
  id: string;
  hideLabel?: boolean;
  customClasses?: string;
  children: React.ReactNode;
}

export default function Select({
  name,
  label,
  id,
  hideLabel,
  customClasses,
  children,
}: SelectProps) {
  const classes = classNames("select", customClasses);
  const labelClasses = classNames("select__label label", {
    label__hide: hideLabel,
  });

  return (
    <div className={classes}>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      <select name={name} id={id} className="select__select body-base">
        {children}
      </select>
    </div>
  );
}
