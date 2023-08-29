'use client'

import DashboardScreen from '@/components/dashboard/DashboardScreen'
import DashboardHeader from '@/components/dashboard/header/DashboardHeader'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const { data: session }: any = useSession()
  const username = session?.user?.username

  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <DashboardHeader username={username} />
        <DashboardScreen />
      </div>
    </>
  )
}

export default Dashboard
