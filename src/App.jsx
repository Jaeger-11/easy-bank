import './App.css'
import Home from './pages/Home';
import Admin from './pages/Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/admin' element={<Admin/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    // <Home/>
  )
}

export default App
