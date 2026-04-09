"use server"
import { decode } from 'next-auth/jwt'
import { cookies } from 'next/headers'

export default async function fun(): Promise<string | null> {
    const cookieStore = await cookies()
    const sessionCookieNames = [
        "__Secure-next-auth.session-token",
        "next-auth.session-token",
        "__Secure-authjs.session-token",
        "authjs.session-token",
    ]

    let sessionToken: string | null = null

    for (const cookieName of sessionCookieNames) {
        const directMatch = cookieStore.get(cookieName)?.value
        if (directMatch) {
            sessionToken = directMatch
            break
        }

        const chunkedMatch = cookieStore
            .getAll()
            .filter((cookie) => cookie.name === cookieName || cookie.name.startsWith(`${cookieName}.`))
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((cookie) => cookie.value)
            .join("")

        if (chunkedMatch) {
            sessionToken = chunkedMatch
            break
        }
    }

    if (sessionToken == null) {
        return null
    }

    const token = await decode({
        secret: process.env.NEXTAUTH_SECRET!,
        token: sessionToken,
    })

    const tokenFromApi =
        typeof token?.tokenFromApi === "string" ? token.tokenFromApi : null

    return tokenFromApi
}
