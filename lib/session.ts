import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const getCurrentSession = async () => {
  const session = await getServerSession(authOptions)
  return session?.user
}

export { getCurrentSession }
