import { Device, IDevice } from './Device'

const products: any = {
  iphone: [
    {
      name: 'iPhone 11 pro max',
      price: 10000,
      description: 'iPhone 11 pro max',
      image: 'https://files.tecnoblog.net/wp-content/uploads/2020/11/iphone-11-pro-produto.png'
    }
  ]
}

interface IDevices {
  deviceType: string
  search?: string
}

const Devices = ({ deviceType, search }: IDevices) => {
  const devices: IDevice[] = products[deviceType] ?? []

  if (devices.length > 0) {
    return (
      <div className="space-y-1">
        {devices.map((device, key) => {
          return <Device key={key} {...device} />
        })}
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center justify-center m-2 mt-4 mb-4 leading-7">
        <h1 className="text-xl font-bold text-center">Nada aqui</h1>
        <p className="text-center">Nenhum dispositivo foi encontrado</p>
      </div>
    )
  }
}

export default Devices
