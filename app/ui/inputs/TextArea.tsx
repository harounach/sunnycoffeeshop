import classNames from "classnames";

interface TextAreaProps {
  name: string;
  label: string;
  id: string;
  placeholder: string;
  hideLabel?: boolean;
  error?: string;
  customClasses?: string;
}

export default function TextArea({
  name,
  label,
  id,
  placeholder,
  hideLabel,
  error,
  customClasses,
}: TextAreaProps) {
  const parentClasses = classNames("text-area", customClasses);
  const labelClasses = classNames("label text-area__label", {
    label__hide: hideLabel,
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
      ></textarea>
      <p className={errorMsgClasses}>{error}</p>
    </div>
  );
}
