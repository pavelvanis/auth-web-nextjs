import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        // // Email and password fields for the form
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // destructuralize credentials
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        console.log("Credentials: ", email, password);

        return null;
      },
    }),
  ],
};

export default authOptions;
