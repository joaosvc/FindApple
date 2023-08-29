import Header from '@/components/header/Header'
import DeviceScreen from '@/components/device/DeviceScreen'

export default ({ params }: any) => {
  const { device } = params

  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <Header />
        <DeviceScreen deviceType={device} />
      </div>
    </>
  )
}
