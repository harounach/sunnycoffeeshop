import Button from "./ui/actionables/buttons/Button";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Button label="Button" />
      <Button variant="danger" label="Button" />
      <Button variant="neutral" label="Button" />
    </div>
  );
}
