import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authMiddleware } from '@/middlewares/auth.middleware'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  if (req.nextUrl.pathname.startsWith('/account') || req.nextUrl.pathname.startsWith('/admin')) {
    return authMiddleware(req);
  }

  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/account/:path*", "/admin/:path*"]

};
