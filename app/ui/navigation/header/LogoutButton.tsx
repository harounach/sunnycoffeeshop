import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { BsBoxArrowRight } from "react-icons/bs";
import { logout } from "@/app/lib/actions/auth.action";

export default function LogoutButton() {
  return (
    <form action={logout} className="nav__logout">
      <IconButton>
        <BsBoxArrowRight />
      </IconButton>
    </form>
  );
}
