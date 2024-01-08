import classNames from "classnames";

interface RadioProps {
  name: string;
  label: string;
  value: string;
  id: string;
  customClasses?: string;
}

export default function Radio({
  name,
  label,
  value,
  id,
  customClasses,
}: RadioProps) {
  const classes = classNames("radio", customClasses);

  return (
    <div className={classes}>
      <input
        className="radio__btn"
        type="radio"
        name={name}
        value={value}
        id={id}
      />
      <label className="radio__label body-base" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
