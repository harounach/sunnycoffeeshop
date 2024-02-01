import Button from "@/app/ui/actionables/buttons/Button";

export default function Newsletter() {
  return (
    <form className="newsletter">
      <div className="text-input newsletter__input">
        <label
          className="label label--hide text-input__label"
          htmlFor="newsletter"
        >
          Email
        </label>
        <input
          className="text-input__input"
          placeholder="Enter your Email"
          type="email"
          name="newsletter_email"
          id="newsletter"
        />
      </div>
      <Button type="submit" label="Sign up" customClasses="newsletter__btn" />
    </form>
  );
}
