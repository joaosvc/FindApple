import Link from 'next/link'

interface IVisitComponent {
  title: string
  subtitle: string
  link: string
  icon: React.ReactNode
}

const VisitComponent = ({ title, subtitle, link, icon }: IVisitComponent) => {
  return (
    <div className="flex flex-row items-center">
      {icon}

      <div className="flex flex-col ml-2 text-sm leading-[1.15rem]">
        <span className="font-semibold">{title}</span>
        <Link href={link} target="_blank">
          <span className="text-blue-600">{subtitle}</span>
        </Link>
      </div>
    </div>
  )
}

export default VisitComponent
