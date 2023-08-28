import ClientComponentAuth from '@/components/auth/provider/ClientComponentAuth'
import ServerComponentAuth from '@/components/auth/provider/ServerComponentAuth'

const Dashboard = async () => {
  return (
    <>
      <ClientComponentAuth />
      <ServerComponentAuth />
    </>
  )
}

export default Dashboard
