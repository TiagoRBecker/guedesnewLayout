
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import axios from  "axios"
 
export const authOptions = {

  session: {
    strategy: "jwt",
  },

  pages: {
    signOut: "/",
    signIn: "/authentication/signin",
    
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
 
  
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req): Promise<any> {
        const { email, password } = credentials;
        try {
          const  user  = await axios.post(`http://localhost:3000/api/signin`, {email});
          const data = user.data.users
        
          return {
            id: data.id,
            name: data.name,
            email: data.email,
            image: data.image,
          };
        } catch (error: any) {
           console.log(error.response.message)
          throw new Error(`${error.response.data.message}`);
        }
      },
    }),
    
  ],
  callbacks: {
    async signIn({ user,account }:any) {
     
      return {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        image: user?.image,
      };
   
    },
    jwt: async ({ token, user }:any): Promise<any> => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }:any): Promise<any> => {
      if (token) {
        session.user = token.user as any;
      }
      return session;
    },
  },
};
