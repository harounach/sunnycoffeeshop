import { useState, useEffect } from "react";
import { useAppSelector } from "@/state/hooks";
import { selectUser } from "@/state/userSlice";
import { useRouter } from "next/router";

export const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useAppSelector(selectUser);
  const status = user && user.name ? true : false;
  useEffect(() => {
    if (status) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [status]);

  return isLoggedIn;
};

export const useAuthNavigate = () => {
  const router = useRouter();
  const status = useAuthStatus();

  // Check if user is logged in
  useEffect(() => {
    if (!status) {
      console.log("User is Logged out");
      router.replace({
        pathname: "/login",
        query: {
          nxt: router.pathname,
        },
      });
    }
  }, [status, router]);
};
