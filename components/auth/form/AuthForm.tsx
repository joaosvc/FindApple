'use client'

import { useEffect, useState } from 'react'
import AuthInput from '../options/AuthInput'
import AuthButton from '../options/AuthButton'
import { signIn } from 'next-auth/react'
import AuthError from '../options/AuthError'
import { useRouter } from 'next/navigation'

interface AuthFormProps extends React.HTMLAttributes<HTMLFormElement> {}

interface IUser {
  username: string
  password: string
}

const AuthForm = ({ className, ...props }: AuthFormProps) => {
  const router = useRouter()
  const defaultData = {
    username: '',
    password: ''
  }

  const [data, setData] = useState<IUser>(defaultData)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (!isLoading) {
      setIsLoading(true)

      const response = await signIn<'credentials'>('credentials', { ...data, redirect: false })

      if (!response?.error) {
        router.push('/dashboard')
      } else {
        setError(response.error)
      }

      setIsLoading(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }

  return (
    <form className={`w-full h-auto space-y-3 text-sm ${className}`} {...props} onSubmit={onSubmit}>
      {error && <AuthError message={error} />}

      <AuthInput
        name="username"
        type="text"
        label="Usuário"
        onChange={handleChange}
        disabled={isLoading}
      />
      <AuthInput
        name="password"
        type="password"
        label="Senha"
        onChange={handleChange}
        disabled={isLoading}
      />
      <AuthButton value="Entrar" disabled={isLoading} />
    </form>
  )
}

export default AuthForm
