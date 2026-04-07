"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
interface MySessionProviderProps {
  children: ReactNode;
  session?: any; // أو import { Session } from "next-auth" واستخدم Session
}

export default function MySessionProvider({children}:MySessionProviderProps) {
 



  return (
    <>
    <SessionProvider>
        {children}
    </SessionProvider>
    </>
  )
}
