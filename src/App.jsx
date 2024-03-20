import './App.css'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Why from './components/Why'

function App() {

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

export default App
