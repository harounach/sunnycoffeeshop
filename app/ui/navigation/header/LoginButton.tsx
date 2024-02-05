"use client";

import { usePathname } from "next/navigation";
import LinkButton from "@/app/ui/actionables/buttons/LinkButton";

export default function LoginButton() {
  const pathname = usePathname();
  const searchParams = new URLSearchParams();
  searchParams.set("callbackUrl", pathname);
  let loginURL = "";
  if (pathname.startsWith("/login") || pathname.startsWith("/register") || pathname === "/") {
    loginURL = "/login";
  } else {
    loginURL = `/login?${searchParams.toString()}`;
  }

  return <LinkButton url={loginURL} label="Login" />;
}
