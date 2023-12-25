import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      token: string;
    };

    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: number;
      username: string;
      email: string;
      password: string;
      token: string;
      number: string;
    };
    token: string;
  }
}
