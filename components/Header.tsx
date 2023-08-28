import Link from 'next/link'

const Header = ({ rightItems }: { rightItems: React.ReactNode }) => {
  return (
    <>
      <header>
        <nav className="w-full flex flex-grow basis-auto">
          <div className="flex items-center justify-between m-auto w-full p-6 sm:p-3 sm:w-4/5 pt-3 pb-3">
            <Link href="/">
              <h1 className="font-semibold text-lg">Find Apple</h1>
            </Link>

            <div className="flex flex-row items-center space-x-3">{rightItems}</div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
