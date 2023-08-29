import Link from 'next/link'

interface IProduct {
  name: string
  icon: string
  type: string
}

const Product = ({ name, icon, type }: IProduct) => {
  return (
    <Link href={`device/${type}`}>
      <div className="flex flex-col items-center space-y-3 transition duration-150 hover:drop-shadow-md cursor-pointer">
        <img className="h-[4rem] sm:h-[5rem]" src={icon} alt={name} />
        <span className="font-medium">{name}</span>
      </div>
    </Link>
  )
}

export default Product
