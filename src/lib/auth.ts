import NextAuth, { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
//  authorization: {
//   params: { scope: ["email", "profile", "https://www.googleapis.com/auth/youtube"].join(" ") }
// }
const authConfig = {
  providers: [GoogleProvider],

  callbacks: {
    authorized({ request, auth }) {

      const { pathname } = request.nextUrl;
      if (pathname === "/") return !!auth;
      return true;
    }
  },
} satisfies NextAuthConfig

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authConfig)

