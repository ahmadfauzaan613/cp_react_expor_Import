import React from 'react'
import Navbar from './Navbar'
import whatsapp from '../Assets/whatsapp.png'
import Footer from '../Components/Footer'

function ComArticle(props) {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="desktop3:mx-[10%] phone:px-[5%] tablet:px-[5%] laptop:mx-[5%] desktop:mx-[5%] desktop2:mx-[5%] mt-[4rem] pb-[2rem]" id="gallery">
        {props.children}
      </div>
      <div className="absolute bottom-5 right-5 cursor-pointer z-10">
        <a href="https://wa.me/6288271974588" rel="noreferrer" target="_blank">
          <img src={whatsapp} alt="" className="desktop3:w-[2.7vw] desktop2:w-[2.5vw] desktop:w-[3vw] phone:w-[10vw] tablet:w-[8vw] laptop:w-[5vw] h-full" />
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default ComArticle
