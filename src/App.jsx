import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Services from './components/Services'
import ServicesView from './components/ServicesView'
import Contact from './components/Contact'
import Booking from './components/Booking'
import CleaningCalculator from './components/CleaningCalculator'
import CarpetCleaningCalculator from './components/CarpetCleaningCalculator'
import CleaningView from './components/CleaningView'


function App() {

  return (
    <>
      <Navigation  />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/booking" element={<Booking />}/>
            <Route path="/servicesview/:id" element={<ServicesView />}/>
            <Route path="/cleaningcalculator" element={<CleaningCalculator />}/>
            <Route path="/carpetcleaningcalculator" element={<CarpetCleaningCalculator />}/>
            <Route path="/cleaningview/:id" element={<CleaningView />}/>


          </Routes>
          <Footer />
    </>
  )
}

export default App;
