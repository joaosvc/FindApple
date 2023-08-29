import { AiOutlineApple } from 'react-icons/ai'
import VisitComponent from './visit/VisitComponent'
import MacbookFortalIcon from '../icons/MacbookFortalIcon'
import ProductsViewer from './product/ProductsViewer'

const HomeScreen = () => {
  return (
    <>
      <main className="w-full flex overflow-auto mt-16 sm:mt-20 justify-center">
        <div className="w-full lg:w-[60rem] sm:w-[85vw] overflow-auto">
          <div className="w-full items-center flex-col sm:items-start sm:flex-row h-auto flex justify-between">
            <div className="text-2xl font-extrabold">
              <h1>Selecione o seu aparelho</h1>
              <span>para listar os preços</span>
            </div>

            <div className="flex flex-col space-y-4 mt-7 sm:mt-0">
              <VisitComponent
                title="Visite a Macbook Fortaleza"
                subtitle="Veja os produtos disponíveis"
                link="https://www.instagram.com/macbookfortal/"
                icon={<MacbookFortalIcon size={26} />}
              />
              <VisitComponent
                title="Visite uma Apple Store"
                subtitle="Procure uma loja perto de você"
                link="https://www.apple.com/br/retail/"
                icon={<AiOutlineApple size={26} />}
              />
            </div>
          </div>

          <div className="w-[85vw] sm:w-[85vw] lg:w-full m-auto overflow-auto mt-16 sm:mt-28">
            <ProductsViewer />
          </div>
        </div>
      </main>
    </>
  )
}
export default HomeScreen
