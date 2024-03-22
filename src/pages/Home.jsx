import Navbar from "../components/Navbar";
import Articles from '../components/Articles'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Why from '../components/Why'

const Home = () => {
  return (
    <div className='font-public min-h-[100vh] bg-lightGray text-grayishBlue'>
      <Navbar/>
      <Hero/>
      <Why/>
      <Articles/>
      <Footer/>
    </div>
  )
}

export default Home