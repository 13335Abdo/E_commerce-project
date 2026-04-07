"use server"
import { decode } from 'next-auth/jwt'
import { cookies } from 'next/headers'

export default async function fun() {


    const mycookies = await cookies()

    const cook = mycookies.get("next-auth.session-token")?.value
    if (cook==null) {
        return null
    }

    const token = await decode({ secret: process.env.NEXTAUTH_SECRET!, token: cook })

    console.log("+=================",token);



    return token?.tokenFromApi
}
