import TextInput from "../../inputs/TextInput";
import Button from "@/app/ui/actionables/buttons/Button";

export default function Newsletter() {
  return (
    <form className="newsletter">
      <TextInput
        name="newsletter_email"
        label="Email"
        id="newsletter"
        placeholder="Enter your Email"
        hideLabel
        customClasses="newsletter__input"
      />
      <Button type="submit" label="Sign up" customClasses="newsletter__btn" />
    </form>
  );
}
