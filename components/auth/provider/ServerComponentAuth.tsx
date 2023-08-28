import { getCurrentSession } from '@/lib/session'

const ServerComponentAuth = async () => {
  const user = await getCurrentSession()

  return (
    <>
      {user && (
        <div className="bg-slate-500 border gap-2 h-60 max-w-md overflow-scroll">
          <h2>Client component</h2>
          {JSON.stringify(user)}
        </div>
      )}
    </>
  )
}

export default ServerComponentAuth
