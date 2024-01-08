import classNames from "classnames";

interface TextInputProps {
  name: string;
  label: string;
  type?: "text" | "password" | "email"
  id: string;
  placeholder: string;
  hideLabel?: boolean;
  customClasses?: string;
}

export default function TextInput({
  name,
  label,
  type,
  id,
  placeholder,
  hideLabel,
  customClasses,
}: TextInputProps) {
  const parentClasses = classNames("text-input", customClasses);
  const labelClasses = classNames("label text-input__label", {
    label__hide: hideLabel,
  });
  const inputType = type ? type : "text";

  return (
    <div className={parentClasses}>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      <input
        className="text-input__input"
        placeholder={placeholder}
        type={inputType}
        name={name}
        id={id}
      />
    </div>
  );
}
