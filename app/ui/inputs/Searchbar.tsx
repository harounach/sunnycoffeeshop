import TextInput from "./TextInput";

interface SearchbarProps {
  customClasses?: string;
}

export default function Searchbar({ customClasses }: SearchbarProps) {
  return (
    <div className={customClasses}>
      <TextInput
        name="q"
        label="Search"
        id="search"
        placeholder="Search..."
        hideLabel
      />
    </div>
  );
}
