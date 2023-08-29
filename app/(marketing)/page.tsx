import Header from '@/components/header/Header'
import HomeScreen from '@/components/home/HomeScreen'

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <Header />
        <HomeScreen />
      </div>
    </>
  )
}

export default Home
