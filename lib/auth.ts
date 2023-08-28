import { NextAuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from './prisma'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials): Promise<any> {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Invalid auth credentials')
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username
          }
        })

        if (!user || !user.hashedPassword) {
          throw new Error('User not registered through credentials')
        }
        const matchPassword = await bcrypt.compare(credentials.password, user.hashedPassword)

        if (!matchPassword) {
          throw new Error('Invalid credentials')
        }

        return user
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.SECRET,
  debug: process.env.ENV_NODE === 'development',
  pages: {
    signIn: '/auth'
  }
}
