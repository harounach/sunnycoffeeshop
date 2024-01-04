import classNames from "classnames";

interface TextInputProps {
  name: string;
  label: string;
  id: string;
  placeholder: string;
  hideLabel?: boolean;
  customClasses?: string;
}

export default function TextInput({
  name,
  label,
  id,
  placeholder,
  hideLabel,
  customClasses,
}: TextInputProps) {
  const parentClasses = classNames("text-input", customClasses);
  const labelClasses = classNames("label text-input__label", {
    label__hide: hideLabel,
  });

  return (
    <div className={parentClasses}>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      <input
        className="text-input__input"
        placeholder={placeholder}
        type="text"
        name={name}
        id={id}
      />
    </div>
  );
}
