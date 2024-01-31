
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
function App() {


  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-screen flex overflow-hidden'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

    </>
  )
}

export default App
