import { useEffect } from "react";
import { useAppSelector } from "@/state/hooks";
import { selectUser } from "@/state/userSlice";
import { useRouter } from "next/router";

export const useAuthStatus = () => {
  const user = useAppSelector(selectUser);
  return user && user.name ? true : false;
};

export const useAuthNavigate = () => {
  const router = useRouter();
  const isLoggedIn = useAuthStatus();

  // Check if user is logged in
  useEffect(() => {
    if (isLoggedIn === false) {
      console.log("User is Logged out");

      router.replace({
        pathname: "/login",
        query: {
          nxt: router.pathname,
        },
      });
    }
  }, [isLoggedIn, router]);
};
