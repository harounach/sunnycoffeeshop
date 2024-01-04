import TextInput from "@/app/ui/inputs/TextInput";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <div style={{maxWidth: "300px"}}>
        <TextInput
          name="search"
          label="Search"
          id="search"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
