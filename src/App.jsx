import React from 'react'
import Home from '../src/Pages/Home/Home.jsx'
import Navbar from '../src/Pages/Nav/Nav.jsx'
import Cat from '../src/Pages/Categories/Cat.jsx'
import Service from '../src/Pages/Service/Service.jsx'
import About from '../src/Pages/About/About.jsx'
import Footer from '../src/Pages/Footer/Footer.jsx'
import Faq from '../src/Pages/Faq/Faq.jsx'
import Contact from '../src/Pages/Contact/Contact.jsx'
import Floating from '../src/Pages/Floating/Floating.jsx'
import Whatsapp from '../src/Pages/Whatsapp/Whatsapp.jsx'
import How from '../src/Pages/How/How.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Floating />
      <Whatsapp />
      <Cat />
      <Service />
      <How /> 
      <About />
      <Contact />
      <Faq />
      <Footer />

    </div>
  )
}

export default App