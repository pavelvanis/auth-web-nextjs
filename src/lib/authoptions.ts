import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        // // Email and password fields for the form
        // email: { label: "Email", type: "text" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // destructuralize credentials
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const login = await fetch(`http://localhost:3000/api/auth/login`, {
          method: "POST",
          body: JSON.stringify({ email, password }),
        });

        const { user, token } = await login.json();

        console.log(token);

        if (login.ok) {
          return { ...user, token };
        } else {
          throw new Error("Error while logging");
        }
      },
    }),
  ],
};

export default authOptions;
