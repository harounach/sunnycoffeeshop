import classNames from "classnames";

interface TextAreaProps {
  name: string;
  label: string;
  id: string;
  placeholder: string;
  hideLabel?: boolean;
  error?: string;
  defaultValue?: string;
  customClasses?: string;
}

export default function TextArea({
  name,
  label,
  id,
  placeholder,
  hideLabel,
  error,
  defaultValue,
  customClasses,
}: TextAreaProps) {
  const parentClasses = classNames("text-area", customClasses);
  const labelClasses = classNames("label text-area__label", {
    "label--hide": hideLabel,
  });
  const errorMsgClasses = classNames("text-area__error body-base", {
    show: typeof error === "string" && error !== "",
  });

  return (
    <div className={parentClasses}>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      <textarea
        className="text-area__area"
        name={name}
        id={id}
        cols={30}
        rows={5}
        placeholder={placeholder}
        defaultValue={defaultValue ? defaultValue : ""}
      ></textarea>
      {error && <p className={errorMsgClasses}>{error}</p>}
    </div>
  );
}
