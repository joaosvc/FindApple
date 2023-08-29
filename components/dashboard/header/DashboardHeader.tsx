import Header from '@/components/header/Header'
import { MdAccountCircle } from 'react-icons/md'

interface IDashboardHeader {
  username?: string | null
}

const DashboardHeader = ({ username }: IDashboardHeader) => {
  return (
    <Header
      rightItems={
        <>
          <div
            className="flex flex-row space-x-1 items-center p-2 pl-3 pr-3 cursor-pointer
          transition duration-150 ease-in hover:shadow-md hover:bg-slate-50 rounded-md">
            <span className="text-md font-medium">{username}</span>
            <MdAccountCircle className="text-gray-800" size={28} />
          </div>
        </>
      }
    />
  )
}

export default DashboardHeader
