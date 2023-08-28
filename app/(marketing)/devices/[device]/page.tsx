import Header from '@/components/Header'
import DeviceScreen from '@/components/device/DeviceScreen'

export default ({ params }: any) => {
  const { device } = params

  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <Header rightItems={<span className="font-semibold cursor-pointer">Ajuda</span>} />
        <DeviceScreen deviceType={device} />
      </div>
    </>
  )
}
