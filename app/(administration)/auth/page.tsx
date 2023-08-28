import Header from '@/components/Header'
import AuthScreen from '@/components/auth/AuthScreen'

const Auth = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <Header rightItems={<span className="font-semibold cursor-pointer">Ajuda</span>} />
        <AuthScreen />
      </div>
    </>
  )
}

export default Auth
