import Header from '@/components/Header'
import HomeScreen from '@/components/home/HomeScreen'

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <Header rightItems={<span className="font-semibold cursor-pointer">Ajuda</span>} />
        <HomeScreen />
      </div>
    </>
  )
}

export default Home
