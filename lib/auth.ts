import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add your authentication logic here
        // This example uses a simple in-memory store, replace with your actual database
        const users = {
          "amiredowan@gmail.com": "password123",
        }

        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = users[credentials.email]
        if (user === credentials.password) {
          return { email: credentials.email }
        }

        return null
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.email = user.email
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

