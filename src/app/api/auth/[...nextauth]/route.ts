import { setCookie } from "@/utils/cookie";

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

interface IUser {
  token: string;
}

const handler = NextAuth({
  secret: process.env.NEXTAUTH_URL as string,

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

        const res = await fetch("http://localhost:3001/user/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-type": "application/json",
          },
        });

        const user = await res.json();

        if (res.ok && user) {
          console.log("user with token or not", user);
          // user.token = user;
          // return user.token;
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    // // jwt will call when refresh session
    async jwt({ token, user }) {
      console.log(token, user);
      // in console you will see first time when login you have user object and session is undefined and then session is exist and have token but user is empty object
      if (user) return { ...user, ...token };

      setCookie("token", token.token);
      // if (new Date().getTime() < token.expire)
      // this is line mean if user available put user in useSession or not just return token/
      return token;
    },
    // token dont have any type from what i get from back so i did overwrite
    async session({ token, session }) {
      console.log("herr swar tokens", token);
      session.user = token.user;
      session.user.token = token.token;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
