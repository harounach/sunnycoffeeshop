import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { getUserByEmail } from "@/app/lib/database/user/user.query";
import { comparePassword } from "@/app/lib/utils/auth";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        // Validate credentials
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(4) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          // Get user from database
          const user = await getUserByEmail(email);
          if (!user) return null;

          // Compare passwords
          const passwordsMatch = await comparePassword(
            password,
            user.passwordHash as string,
          );
          if (passwordsMatch) return user;
        }

        console.log("Invalid credentials");
        return null;

        // return {
        //   _id: "id--vfdjvnjdfnvjdnfvjndfjvnjfdgcvgv",
        //   name: "Haron",
        //   email: "haron@hwiren",
        //   role: "admin",
        //   createdAt: "20 Dec 2022",
        // };
      },
    }),
  ],
});
