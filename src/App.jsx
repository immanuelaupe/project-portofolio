import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './component/About/about'
import Experience from './component/Experience/experience'
import Hobby from './component/Hobby/hobby'
import Navbar from './component/Navbar/navbar'
import Skills from './component/Skills/Skills'
import Education from './component/Education/education'
import Profile from './component/Header/profile'
import Footer from './component/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Profile />
     <About />  
     <Education />
     <Experience />
     <Skills />
     <Hobby />
     <Footer />
    </>
  )
}

export default App
