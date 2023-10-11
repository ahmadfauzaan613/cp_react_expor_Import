import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Product from '../Components/Product'
import Gallery from '../Components/Gallery'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import whatsapp from '../Assets/whatsapp.png'
import ValueCompany from '../Components/ValueCompany'
import CompanyTerm from '../Components/CompanyTerm'
import Team from '../Components/Team'

function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <ValueCompany />
      <Product />
      <CompanyTerm />
      <div className="BackgroundHero2 desktop3:mt-16 desktop3:mb-8 phone:mt-5 tablet:mt-5 laptop:mt-5 desktop:mt-12 desktop2:mt-12">
        <p className="desktop3:text-[42px] desktop:text-[34px] desktop2:text-[34px] phone:text-[28px] phone:text-center tablet:text-[24px] tablet:text-center laptop:text-[28px] laptop:text-center font-bold  text-white">Are you interested in purchasing?</p>
      </div>
      <Team />
      <div className="absolute bottom-5 right-5 cursor-pointer z-10">
        <a href="https://wa.me/6288271974588" rel="noreferrer" target="_blank">
          <img src={whatsapp} alt="" className="desktop3:w-[2.7vw] desktop2:w-[2.5vw] desktop:w-[3vw] phone:w-[10vw] tablet:w-[8vw] laptop:w-[5vw] h-full" />
        </a>
      </div>
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
