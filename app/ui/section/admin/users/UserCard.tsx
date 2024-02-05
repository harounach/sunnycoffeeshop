import DeleteUserButton from "./DeleteUserButton";
import { User } from "@/app/lib/definitions";
import { formatFriendyDate } from "@/app/lib/utils/dateUtils";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <div className="user-card__header">
        <span className="user-card__name title-base">{user.name}</span>
        <span className="user-card__email body-base">{user.email}</span>
      </div>

      <div className="user-card__footer">
        <span className="user-card__label body-base">Join at: </span>
        <span className="user-card__date body-base">
          {formatFriendyDate(user.createdAt.toString())}
        </span>

        {user.role !== "admin" && (
          <DeleteUserButton userId={user._id.toString()} />
        )}
      </div>
    </div>
  );
}
