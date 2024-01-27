import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // { auth, request: { nextUrl } }
    authorized({ auth, request }) {
      console.log(request.nextUrl.searchParams.get("callbackUrl"));
      const isLoggedIn = !!auth?.user;
      const isOnAdminPages = request.nextUrl.pathname.startsWith("/admin");
      const isOnAccountPages = request.nextUrl.pathname.startsWith("/account");
      const isOnCheckoutPages = request.nextUrl.pathname.startsWith("/checkout");
      const isOnLoginPage = request.nextUrl.pathname.startsWith("/login");

      if( (isOnAdminPages || isOnAccountPages || isOnCheckoutPages) && !isLoggedIn ) {
        return false;
      }

      if(isOnLoginPage && isLoggedIn) {
        if(request.nextUrl.searchParams.has("callbackUrl")) {
          return Response.redirect(request.nextUrl.searchParams.get("callbackUrl"));
        }
        return Response.redirect(new URL('/', request.nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
