import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const authMiddleware = (req: NextRequest) => {
	const res = NextResponse.next();
	if (!req.cookies.get("userInfo")) {
    const url = req.nextUrl.clone();
    const nxt = url.pathname;
    url.pathname = "/login";
    url.searchParams.set("nxt", nxt);
    return NextResponse.redirect(url);
  }
  
  return res;
}