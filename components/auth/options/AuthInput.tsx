interface IAuthInput {
  name: string
  type: string
  label?: string
  placeholder?: string
  onChange?: any
  disabled?: boolean
}

const AuthInput = ({ label, type, name, placeholder, onChange, disabled }: IAuthInput) => {
  return (
    <div className="flex flex-col">
      <label className="text-md font-medium mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        className={`w-full rounded-sm bg-transparent text-sm p-2 outline-none border border-solid border-gray-300 focus:border-blue-500 transition duration-100 ease-in-out ${
          disabled && 'cursor-not-allowed'
        }`}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        autoCapitalize="none"
        autoCorrect="off"
      />
    </div>
  )
}

export default AuthInput
