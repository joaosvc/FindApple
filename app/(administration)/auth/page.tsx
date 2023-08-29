import Header from '@/components/header/Header'
import AuthScreen from '@/components/auth/AuthScreen'

const Auth = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <Header />
        <AuthScreen />
      </div>
    </>
  )
}

export default Auth
