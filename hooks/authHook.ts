import { useEffect } from "react";
import { useAppSelector } from "@/state/hooks";
import { selectUser } from "@/state/userSlice";
import { useRouter } from "next/router";

export const useUserStatus = () => {
  const user = useAppSelector(selectUser);
  return user && user.name ? true : false;
};

export const useAuth = () => {
  const router = useRouter();
  const userStatus = useUserStatus();

  // Check if user is loggedin
  useEffect(() => {
    if (!userStatus) {
      console.log("User is Logged out");
      router.replace({
        pathname: "/login",
        query: {
          nxt: router.pathname,
        },
      });
    }
  }, [userStatus]);
};
