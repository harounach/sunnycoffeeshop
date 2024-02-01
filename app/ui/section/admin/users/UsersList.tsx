import classNames from "classnames";
import { BsPencilFill } from "react-icons/bs";
import UserCard from "./UserCard";
import { User } from "@/app/lib/definitions";

interface UsersListProps {
  users: Array<User>;
  customClasses?: string;
}

export default function UsersList({ users, customClasses }: UsersListProps) {
  const classes = classNames("content-card", customClasses);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Users</h3>
      </div>
      <div className="content-card__content">
        {users.map((user) => {
          return <UserCard key={user._id} user={user} />;
        })}
      </div>
    </div>
  );
}
