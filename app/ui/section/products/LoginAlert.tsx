"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LoginAlert({ productId }: {productId: string;}) {
  const pathname = usePathname();
  const searchParams = new URLSearchParams();
  searchParams.set("callbackUrl", pathname);
  const loginURL = `/login?${searchParams.toString()}`;

  return (
    <h3 className="write-review__notice body-base">
      Please{" "}
      <Link className="write-review__login-btn" href={loginURL}>
        Login
      </Link>{" "}
      to write a review
    </h3>
  );
}
