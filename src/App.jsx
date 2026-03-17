import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import TechnicalProficiency from './Sections/TechnicalProficiency'
import MyProjects from './Sections/MyProjects'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <TechnicalProficiency/>
     <About/>
     <MyProjects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
