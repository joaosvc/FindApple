import AuthForm from './form/AuthForm'

const AuthScreen = async () => {
  return (
    <div className="w-screen h-full flex flex-row items-center justify-center">
      <div className="flex h-auto flex-row p-6">
        <div className="w-[20rem] sm:w-[22rem] h-full p-6 flex flex-col items-center justify-center rounded-md shadow-md">
          <h1 className="text-2xl font-extrabold mb-12">Auth</h1>
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
export default AuthScreen
