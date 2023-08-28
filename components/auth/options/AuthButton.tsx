import TailSpin from 'react-loading-icons/dist/esm/components/tail-spin'

interface IAuthButton {
  value?: string
  disabled?: boolean
}

const AuthButton = ({ value, disabled }: IAuthButton) => {
  return (
    <div className="flex flex-col">
      <button
        className={`flex flex-row items-center justify-center w-full rounded-sm bg-blue-500 text-white text-sm p-2 outline-none transition duration-100 ease-in-out hover:bg-blue-600 ${
          disabled && 'cursor-not-allowed bg-gray-300 hover:bg-gray-300'
        }`}
        disabled={disabled}>
        {disabled && <TailSpin className="w-4 h-4 mr-2 -ml-6" speed={0.7} />}
        {value}
      </button>
    </div>
  )
}

export default AuthButton
