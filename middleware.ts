import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { accountMiddleware } from '@/middlewares/account.middleware'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  if (req.nextUrl.pathname.startsWith('/account')) {
    return accountMiddleware(req);
  }

  // We will add admin middleware here
  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/account/:path*", "/admin/:path*"]

};
