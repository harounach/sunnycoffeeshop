"use client";

import { useFormState } from "react-dom";
import { BsTrash } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { deleteUserAction } from "@/app/lib/actions/user.action";

export default function DeleteUserButton({ userId }: { userId: string }) {
  const initialState = { message: "" };
  const deleteUser = deleteUserAction.bind(null, userId);
  const [state, dispatch] = useFormState(deleteUser, initialState);

  return (
    <form className="user-card__btn" action={dispatch}>
      <IconButton color="danger" hasBG>
        <BsTrash />
      </IconButton>
    </form>
  );
}
