import Button from "./ui/actionables/buttons/Button";
import IconButton from "./ui/actionables/buttons/IconButton";
import { AlarmFill, Facebook, CartFill } from "react-bootstrap-icons";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Button label="Button" />
      <Button variant="danger" label="Button" />
      <Button variant="neutral" label="Button" />
      <IconButton>
        <CartFill title="Activity" />
      </IconButton>
      <IconButton color="primary">
        <Facebook title="Activity" />
      </IconButton>
      <IconButton color="danger">
        <Facebook title="Activity" />
      </IconButton>
      <IconButton color="primary" hasBG>
        <Facebook title="Activity" />
      </IconButton>
      <IconButton color="danger" hasBG>
        <Facebook title="Activity" />
      </IconButton>
      <IconButton mini>
        <Facebook title="Activity" />
      </IconButton>
    </div>
  );
}
