import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    _id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
  }

  interface Session {
    user: {
      _id: string;
      name: string;
      email: string;
      role: string;
      createdAt: string;
    } & DefaultSession;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    role: string;
  }
}
