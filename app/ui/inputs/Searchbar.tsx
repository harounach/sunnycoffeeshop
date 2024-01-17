import TextInput from "./TextInput";

interface SearchbarProps {
  customClasses?: string;
}

export default function Searchbar({ customClasses }: SearchbarProps) {
  return (
    <TextInput
      name="q"
      label="Search"
      id="search"
      placeholder="Search..."
      hideLabel
      customClasses={customClasses}
    />
  );
}
