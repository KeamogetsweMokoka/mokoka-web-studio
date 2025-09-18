// import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import About from './components/about';
import Services from './components/services';
import Pricing from './components/pricing';
import Contact from './components/contact'; 


function App() {

  return (
    <>
      <Navbar />
      <About />
      <Services />
      <Pricing />
      <Contact />
    </>
  )
}
export default App;