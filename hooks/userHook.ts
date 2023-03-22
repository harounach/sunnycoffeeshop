import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getPaginationURL, USERS_API_URL } from "@/lib/urlUtils";
import { getUsers } from "@/lib/userUtils";
import { selectUser } from "@/state/userSlice";
import { useAppSelector } from "@/state/hooks";
import User from "@/types/User";
import { GetUsersApiResult } from "@/types/UsersApiResults";

export const useUsers = () => {
  const router = useRouter();
  const [result, setResult] = useState<GetUsersApiResult | null>(null);
  const [loading, setLoading] = useState(true);
  const user = useAppSelector(selectUser) as User;

  useEffect(() => {
    const getUsersResult = async () => {
      const { page, perpage, order } = router.query;
      const GET_USERS_URL = getPaginationURL(USERS_API_URL, {
        page: page as string,
        perpage: perpage as string,
        order: order as string,
      });
      const usersResult = await getUsers(user, GET_USERS_URL);
      setResult(usersResult);
      setLoading(false);
    };

    getUsersResult();
  }, [router.query, user]);

  return { result, loading };
};
