'use client'

import { SessionProvider, useSession } from 'next-auth/react'

interface IAuthProvider {
  children: React.ReactNode
}

const AuthProvider = ({ children }: IAuthProvider) => {
  return (
    <SessionProvider refetchInterval={5 * 60} refetchOnWindowFocus={true}>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider
