import React from 'react'
import ImageGallery from '../Components/ImageGallery'
import Navbar from '../Components/Navbar'
import whatsapp from '../Assets/whatsapp.png'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Content1 from '../Assets/content/6145a8a8627d4.jpg'
import Content2 from '../Assets/content/WhatsApp Image 2023-10-06 at 20.49.27_b3f24394.jpg'
import Content3 from '../Assets/content/WhatsApp Image 2023-10-06 at 20.51.13_6ae0b61f.jpg'
import Content4 from '../Assets/content/WhatsApp Image 2023-10-06 at 20.51.42_1ee0791e.jpg'
import Content5 from '../Assets/content/WhatsApp Image 2023-10-08 at 19.15.11_6dd0f9ec.jpg'
import Content6 from '../Assets/content/WhatsApp Image 2023-10-08 at 19.24.56_fcf2eadb.jpg'
import Content7 from '../Assets/content/r2.jpg'
import Content8 from '../Assets/content/r3.jpg'
import Content9 from '../Assets/content/r5.jpg'
import Content10 from '../Assets/content/r7.jpg'
import Content11 from '../Assets/content/hasil-pertanian-5.webp'
import Content12 from '../Assets/content/kunyit(1)3.jpeg'
import Content13 from '../Assets/content/64b11f9342d7b.jpg'
import Content14 from '../Assets/content/kunyit-garut-potensial-untuk-diekspor_18030.jpg'

function Gallerry() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="desktop3:mx-[10%] phone:px-[5%] tablet:px-[5%] laptop:mx-[5%] desktop:mx-[5%] desktop2:mx-[5%] mt-[4rem] pb-[2rem]" id="gallery">
        <p className="desktop3:text-[42px] desktop2:text-[36px] desktop:text-[30px] text-[#AA941E] phone:text-center phone:text-[30px] phone:pb-3 tablet:text-center tablet:text-[30px] tablet:pb-3 laptop:text-center laptop:text-[30px] laptop:pb-3">Gallery</p>
        <div className="grid desktop3:grid-cols-4 desktop3:gap-10 desktop3:mt-8 desktop3:mb-[3rem] phone:grid-cols-1 phone:gap-3 phone:mb-[1.4rem] tablet:grid-cols-1 tablet:gap-3 tablet:mb-[1.4rem] laptop:grid-cols-2 laptop:gap-3 laptop:mb-[1.4rem] desktop:grid-cols-2 desktop:gap-3 desktop:mb-[1.4rem] desktop:mt-8 desktop2:grid-cols-4 desktop2:gap-3 desktop2:mb-[1.4rem] desktop2:mt-8">
          <ImageGallery imagee={Content1} />
          <ImageGallery imagee={Content2} />
          <ImageGallery imagee={Content3} />
          <ImageGallery imagee={Content4} />
          <ImageGallery imagee={Content5} />
          <ImageGallery imagee={Content6} />
          <ImageGallery imagee={Content7} />
          <ImageGallery imagee={Content8} />
          <ImageGallery imagee={Content9} />
          <ImageGallery imagee={Content10} />
          <ImageGallery imagee={Content11} />
          <ImageGallery imagee={Content12} />
          <ImageGallery imagee={Content13} />
          <ImageGallery imagee={Content14} />
        </div>
      </div>
      <div className="absolute bottom-5 right-5 cursor-pointer z-10">
        <a href="https://wa.me/6288271974588" rel="noreferrer" target="_blank">
          <img src={whatsapp} alt="" className="desktop3:w-[2.7vw] desktop2:w-[2.5vw] desktop:w-[3vw] phone:w-[10vw] tablet:w-[8vw] laptop:w-[5vw] h-full" />
        </a>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Gallerry
