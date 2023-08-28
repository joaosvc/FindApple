interface IAuthError {
  message: string
}

const AuthError = ({ message }: IAuthError) => {
  return (
    <div className="flex flex-col p-3 border-solid border border-l-4 border-red-600 leading-4">
      <span className="text-red-600">{message}</span>
    </div>
  )
}

export default AuthError
