import React from "react";

import User from "@/types/User";
import IconButton from "../Button/IconButton";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { formatFriendyDate } from "@/lib/dateUtils";

interface AdminUserRowProps {
  user: User;
}

const AdminUserRow = ({ user }: AdminUserRowProps) => {
  return (
    <tr>
      <td className="border-2 border-gray-200 px-4">{user._id}</td>
      <td className="border-2 border-gray-200 px-4">{user.name}</td>
      <td className="border-2 border-gray-200 px-4">
        {formatFriendyDate(user.createdAt)}
      </td>
      <td className="border-2 border-gray-200 px-4">16</td>
      <td className="border-2 border-gray-200 px-4">
        <div className="flex items-center justify-center">
          <IconButton
            icon={faTrash}
            variant="primaryIcon"
            size="normal"
            url="/order"
          />
        </div>
      </td>
    </tr>
  );
};

export default AdminUserRow;
