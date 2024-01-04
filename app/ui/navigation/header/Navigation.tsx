import Button from "@/app/ui/actionables/buttons/Button"
import CartButton from "@/app/ui/actionables/buttons/CartButton"

export default function Navigation() {
  return (
    <nav class="nav">
      <ul>
        <li>
          <a class="nav__link" href="/">
            Home
          </a>
        </li>
        <li>
          <a class="nav__link" href="/products">
            Shop
          </a>
        </li>
        <li>
          <a class="nav__link" href="/cart">
            <CartButton />
          </a>
        </li>
        <li>
          <Button url="/login" label="Label" customClasses="nav__link" />
        </li>
      </ul>
    </nav>
  );
}
