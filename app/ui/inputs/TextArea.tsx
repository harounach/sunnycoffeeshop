import classNames from "classnames";

interface TextAreaProps {
  name: string;
  label: string;
  id: string;
  placeholder: string;
  hideLabel?: boolean;
  customeClasses?: string;
}

export default function TextArea({
  name,
  label,
  id,
  placeholder,
  hideLabel,
  customeClasses,
}: TextAreaProps) {
  const parentClasses = classNames("text-area", customeClasses);
  const labelClasses = classNames("label text-area__label", {
    label__hide: hideLabel,
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
        rows={10}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
