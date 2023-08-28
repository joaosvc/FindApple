export interface IDevice {
  name: string
  price: number
  description: string
  image: string
}

const Device = ({ name, price, description, image }: IDevice) => {
  return (
    <>
      <div className="h-9 flex flex-row items-center justify-between space-x-2 p-[0.1rem] text-base hover:bg-gray-200">
        <div className="h-full flex flex-row items-center space-x-2">
          <div className="h- w-9">
            <img className="w-9" src={image} alt="Device Image" />
          </div>

          <div className="flex items-center h-full w-auto sm:w-52">
            <span title="Nome do dispositivo">{name}</span>
          </div>

          <div className="flex items-center h-full text-sm">
            <span title="Nome do dispositivo">Dourado</span>
          </div>
        </div>

        <div className="flex items-center h-full pr-2">
          <span className="text-sm" title="Data de postagem">
            10/09/2004
          </span>
        </div>
      </div>
    </>
  )
}

export { Device }
