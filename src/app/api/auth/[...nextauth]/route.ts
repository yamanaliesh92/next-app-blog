import { setCookie } from "@/utils/cookie";

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

interface IUser {
  token: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        console.log("=====================", { credentials });
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        const res = await fetch("http://localhost:3001/user/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-type": "application/json",
          },
        });

        const user = await res.json();
        console.log("user", { user });

        if (res.ok && user) {
          console.log("user", user);
          setCookie("token", user.token);
          return user;
        }

        return null;
      },
    }),
  ],
  // session: {
  //   strategy: "jwt",
  // },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
