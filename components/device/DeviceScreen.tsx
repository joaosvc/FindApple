'use client'

import { useRef } from 'react'
import DeviceManager from './DeviceManager'
import Devices from './Devices'

const DeviceScreen = ({ deviceType }: { deviceType: string }) => {
  const DeviceManagerRef = useRef(null) as any

  return (
    <>
      <main className="w-full flex flex-col overflow-auto mt-4 justify-center">
        <DeviceManager ref={DeviceManagerRef} />

        <div className="w-[90vw] lg:w-[60rem] sm:w-[85vw] mt-20 items-center justify-between m-auto shadow-sm rounded-sm bg-light">
          <Devices deviceType={deviceType} search={DeviceManagerRef?.searchValue} />
        </div>
      </main>
    </>
  )
}
export default DeviceScreen
