'use client'

import { forwardRef, useImperativeHandle, useState } from 'react'

interface ISearchContent {}

const SearchContent = forwardRef((props: ISearchContent, ref) => {
  const [isSearching, setIsSearching] = useState(false)
  const [SearchItems, setSearchItems] = useState([] as any[])

  useImperativeHandle(ref, () => {
    return {
      open: () => setIsSearching(true),
      close: () => setTimeout(() => setIsSearching(false), 50),
      handler: (search: string) => handler(search)
    }
  })

  const SearchResult = () => {
    if (SearchItems?.length > 0) {
      return SearchItems.map((item) => {
        const { id, name } = item

        return (
          <div
            className="flex flex-row items-center p-3 cursor-pointer hover:bg-gray-200"
            onClick={() => console.log('aa')}>
            <p className="text-sm text-dark">{name}</p>
          </div>
        )
      })
    }
  }

  const handler = (search: string) => {
    let searchItems: any[] = []

    if (search?.length > 0) {
      searchItems = [
        {
          id: 1,
          name: search
        }
      ]
    }
    setSearchItems(searchItems)
  }

  if (isSearching) {
    return (
      <div className="absolute w-[90vw] lg:w-[60rem] sm:w-[85vw] m-auto bg-light shadow-sm">
        <SearchResult />
      </div>
    )
  }
})

export default SearchContent
