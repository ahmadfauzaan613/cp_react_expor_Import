import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Product from '../Components/Product'
import Gallery from '../Components/Gallery'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import whatsapp from '../Assets/whatsapp.png'

function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <div className="BackgroundHero2 mt-16 mb-4">
        <p className="text-[42px] font-bold  text-white">Lorem ipsum dolor sit amet</p>
      </div>
      <Gallery />
      <Contact />
      <Footer />
      <div className="absolute bottom-5 right-5 cursor-pointer">
        <img src={whatsapp} alt="" className="w-[2.7vw] h-full" />
      </div>
    </div>
  )
}

export default Home
