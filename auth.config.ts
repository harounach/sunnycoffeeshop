import type { NextAuthConfig, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authConfig = {
  pages: {
    signIn: "/login",
  },

  callbacks: {
    // { auth, request: { nextUrl } }
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const role = auth?.user?.role;
      const isOnAdminPages = request.nextUrl.pathname.startsWith("/admin");
      const isOnAccountPages = request.nextUrl.pathname.startsWith("/account");
      const isOnCheckoutPages =
        request.nextUrl.pathname.startsWith("/checkout");
      const isOnLoginPage = request.nextUrl.pathname.startsWith("/login");
      const isOnRegisterPage = request.nextUrl.pathname.startsWith("/register");

      // Protect admin, account, nad checkout pages
      if (
        (isOnAdminPages || isOnAccountPages || isOnCheckoutPages) &&
        !isLoggedIn
      ) {
        return false;
      }

      // Protect admin pages
      if (isOnAdminPages && !!role && role !== "admin") {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      // Check is user aleady logged in
      if ((isOnLoginPage && isLoggedIn) || (isOnRegisterPage && isLoggedIn)) {
        if (request.nextUrl.searchParams.has("callbackUrl")) {
          return Response.redirect(
            request.nextUrl.searchParams.get("callbackUrl") as string,
          );
        }
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },

    jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.role = user.role;
        token.createdAt = user.createdAt;
      }
      return token;
    },

    session({ session, token }: { session: Session; token?: JWT }) {
      if (token) {
        session.user._id = token._id as string;
        session.user.role = token.role as string;
        session.user.createdAt = token.createdAt as string;
      }

      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
