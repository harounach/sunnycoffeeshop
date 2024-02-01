import { useFormState } from "react-dom";
import { BsTrash } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
// import { deleteUserAction } from "@/app/lib/actions/user.action";

export default function DeleteUserButton({ id }: { id: string }) {
  // const initialState = { message: "" };
  // const deleteUser = deleteUserAction.bind(null, id);
  // const [state, dispatch] = useFormState(deleteUser, initialState);

  // action={dispatch}
  return (
    <form className="user-card__btn">
      <IconButton color="danger">
        <BsTrash />
      </IconButton>
    </form>
  );
}
