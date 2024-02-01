import classNames from "classnames";

interface TextInputProps {
  name: string;
  label: string;
  type?: "text" | "password" | "email" | "number" | "tel";
  id: string;
  placeholder: string;
  hideLabel?: boolean;
  error?: string;
  defaultValue?: string | number;
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
  defaultValue,
  customClasses,
}: TextInputProps) {
  const parentClasses = classNames("text-input", customClasses);
  const labelClasses = classNames("label text-input__label", {
    "label--hide": hideLabel,
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
        defaultValue={defaultValue ? defaultValue : ""}
      />
      {error && <p className={errorMsgClasses}>{error}</p>}
    </div>
  );
}
