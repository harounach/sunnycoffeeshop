import classNames from "classnames";

interface SearchbarProps {
  customClasses?: string;
}

export default function Searchbar({ customClasses }: SearchbarProps) {
  const classes = classNames("text-input", customClasses);

  return (
    <div className={classes}>
      <label className="label label--hide text-input__label" htmlFor="search">
        Search
      </label>
      <input
        className="text-input__input"
        name="q"
        id="search"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}
