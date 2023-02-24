import User from "./User";

export interface GetUsersApiResult {
  message: string;
  pages: number;
  page: number;
  data: Array<User>;
  count: number;
}
