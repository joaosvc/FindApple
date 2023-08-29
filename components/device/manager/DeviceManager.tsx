'use client'

import { BiSearch } from 'react-icons/bi'
import SearchContent from '../search/SearchContent'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const DeviceManager = forwardRef((props: any, ref: any) => {
  const [searchValue, setSearchValue] = useState('' as string)
  const SearchContentRef = useRef(null as any)

  const showSearchContent = () => SearchContentRef?.current?.open()
  const closeSearchContent = () => SearchContentRef?.current?.close()

  const handlerSearch = (event: any) => {
    const enteredSearch = event?.target?.value?.trim() ?? ''

    setSearchValue(enteredSearch)
    SearchContentRef?.current?.handler(enteredSearch)
  }

  useImperativeHandle(ref, () => {
    return {
      searchItems: () => searchValue
    }
  })

  return (
    <>
      <div
        className="w-[90vw] lg:w-[60rem] sm:w-[85vw] overflow-auto p-3 items-center justify-between m-auto shadow-sm rounded-sm bg-light"
        {...props}>
        <div className="flex flex-row rounded-lg w-full">
          <label htmlFor="search">
            <BiSearch size={19} className="cursor-pointer" />
          </label>
          <input
            className="bg-transparent w-full ml-3 text-dark text-sm"
            type="search"
            id="search"
            placeholder="Procurar dispositivo"
            onFocus={showSearchContent}
            onBlur={closeSearchContent}
            onKeyUp={handlerSearch}
          />
        </div>
      </div>

      <div className="w-[90vw] lg:w-[60rem] sm:w-[85vw] m-auto mt-1 bg-light">
        <SearchContent ref={SearchContentRef} />

        <div className="w-full h-auto">{/* Device manager here */}</div>
      </div>
    </>
  )
})

export default DeviceManager
