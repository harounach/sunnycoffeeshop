import classNames from "classnames";
import UserCard from "./UserCard";
import Searchbar from "@/app/ui/inputs/Searchbar";
import TablePagination from "@/app/ui/actionables/table/TablePagination";
import {
  fetchFilteredUsers,
  fetchUsersPages,
} from "@/app/lib/database/user/user.query";

interface UsersListProps {
  query: string;
  currentPage: number;
  customClasses?: string;
}

export default async function UsersList({
  query,
  currentPage,
  customClasses,
}: UsersListProps) {
  const classes = classNames("content-card", customClasses);

  const users = await fetchFilteredUsers(query, currentPage);
  const totalPages = await fetchUsersPages(query);

  return (
    <div className={classes}>
      <div className="content-card__header">
        <h3 className="content-card__title title-medium">Users</h3>
      </div>
      <Searchbar customClasses="content-card__search" />
      <div className="content-card__content">
        {users.map((user) => {
          return <UserCard key={user._id.toString()} user={user} />;
        })}
      </div>
      <div className="content-card__pager">
        <TablePagination totalPages={totalPages} />
      </div>
    </div>
  );
}
