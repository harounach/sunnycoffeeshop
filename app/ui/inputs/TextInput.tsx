import classNames from "classnames";

interface TextInputProps {
  name: string;
  label: string;
  type?: "text" | "password" | "email" | "number";
  id: string;
  placeholder: string;
  hideLabel?: boolean;
  error?: string;
  customClasses?: string;
}

export default function TextInput({
  name,
  label,
  type,
  id,
  placeholder,
  hideLabel,
  error,
  customClasses,
}: TextInputProps) {
  const parentClasses = classNames("text-input", customClasses);
  const labelClasses = classNames("label text-input__label", {
    label__hide: hideLabel,
  });
  const errorMsgClasses = classNames("text-input__error body-base", {
    show: typeof error === "string" && error !== "",
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
      <p className={errorMsgClasses}>{error}</p>
    </div>
  );
}
