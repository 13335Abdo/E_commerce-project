import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const nextAuth : NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
      Credentials({
        name: 'Fresh cart',
        
        credentials: {
          email: { type: "email", placeholder: "enter your emAIL" },
          password: { type: "password" }
        },
        async authorize(credentials) {
          const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",
            {
                body: JSON.stringify(credentials),
                method: "post",
                headers: {
                    "content-type": "application/json"
                }
            }
        )
        const data = await res.json()

        console.log("values", data);

        if (data.message == "success") {
            return{
                id: data.user.id,
                email :data.user.email,
                name : data.user.name,
                token : data.token

            }
            
        } return null
        }
      })
    ],
    pages:{signIn:"/signin"},
    callbacks: {
      jwt({ token, user }) {
        if (user) {
          if (user.token) {
            token.tokenFromApi = user.token;
          }
          if (user.id) {
            token.id = user.id;
          }
        }
        return token;
      },

      session({ session, token }) {
        if (session.user) {
          session.user.id =
            (typeof token.id === "string" ? token.id : undefined) ??
            token.sub ??
            "";
        }
        return session;
      },
    }
}
