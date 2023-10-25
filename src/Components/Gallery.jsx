import React from 'react'
import Content1 from '../Assets/content/64b11f9342d7b.jpg'
import Content2 from '../Assets/content/WhatsApp Image 2023-10-06 at 20.49.27_b3f24394.jpg'
import Content3 from '../Assets/content/WhatsApp Image 2023-10-06 at 20.51.13_6ae0b61f.jpg'
import Content4 from '../Assets/content/WhatsApp Image 2023-10-06 at 20.51.42_1ee0791e.jpg'
import Content5 from '../Assets/content/WhatsApp Image 2023-10-08 at 19.15.11_6dd0f9ec.jpg'
import Content6 from '../Assets/content/WhatsApp Image 2023-10-08 at 19.24.56_fcf2eadb.jpg'
import Content7 from '../Assets/content/r2.jpg'
import Content8 from '../Assets/content/kunyit-garut-potensial-untuk-diekspor_18030.jpg'
import ImageGallery from './ImageGallery'

import { useNavigate } from 'react-router-dom'

function Gallery() {
  const navigate = useNavigate()
  return (
    <div className="desktop3:mx-[10%] phone:px-[5%] tablet:px-[5%] laptop:mx-[5%] desktop:mx-[5%] desktop2:mx-[5%] mt-[4rem] pb-[2rem]" id="gallery">
      <p className="desktop3:text-[42px] desktop2:text-[36px] desktop:text-[30px] text-[#2B78BB] phone:text-center phone:text-[30px] phone:pb-3 tablet:text-center tablet:text-[30px] tablet:pb-3 laptop:text-center laptop:text-[30px] laptop:pb-3">Gallery</p>
      <div className="grid desktop3:grid-cols-4 desktop3:gap-10 desktop3:mt-8 desktop3:mb-[3rem] phone:grid-cols-1 phone:gap-3 phone:mb-[1.4rem] tablet:grid-cols-1 tablet:gap-3 tablet:mb-[1.4rem] laptop:grid-cols-2 laptop:gap-3 laptop:mb-[1.4rem] desktop:grid-cols-2 desktop:gap-3 desktop:mb-[1.4rem] desktop:mt-8 desktop2:grid-cols-4 desktop2:gap-3 desktop2:mb-[1.4rem] desktop2:mt-8">
        <ImageGallery imagee={Content1} />
        <ImageGallery imagee={Content2} />
        <ImageGallery imagee={Content3} />
        <ImageGallery imagee={Content4} />
        <ImageGallery imagee={Content5} />
        <ImageGallery imagee={Content6} />
        <ImageGallery imagee={Content7} />
        <ImageGallery imagee={Content8} />
      </div>
      <div className="flex justify-center">
        <button onClick={() => navigate('/Gallery')} className="border border-[#2B78BB] text-[18px] p-2 desktop3:w-[20vw] phone:w-full tablet:w-full laptop:w-full text-[#2B78BB] font-bold hover:bg-[#2B78BB] hover:text-white rounded-[5px]">
          See More
        </button>
      </div>
    </div>
  )
}

export default Gallery
