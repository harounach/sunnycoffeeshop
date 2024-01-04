import TextInput from "./TextInput";

export default function Searchbar() {
  return (
    <div>
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
