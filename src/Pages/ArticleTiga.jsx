import React from 'react'
import ComArticle from '../Components/ComArticle'
import Image1 from '../Assets/content/image.jpg'
import Image2 from '../Assets/content/082218400_1539507547-kunyita.webp'
import Image3 from '../Assets/content/62fa172af0abb.jpg'
import Slider from 'react-slick'

function ArticleTiga() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
  }
  return (
    <ComArticle>
      <Slider {...settings}>
        <div className="desktop3:w-[50vw] desktop3:h-[70vh] desktop2:w-[50vw] desktop2:h-[50vh] bg-black relative rounded-[5px] desktop3:mx-auto desktop2:mx-auto phone:w-full phone:h-[40vh] tablet:w-full tablet:h-[40vh] laptop:w-full laptop:h-[40vh] desktop:w-full desktop:h-[40vh]">
          <img src={Image1} alt="" className="absolute inset-0 w-full h-full object-cover desktop3:rounded-[5px]" />
        </div>
        <div className="desktop3:w-[50vw] desktop3:h-[70vh] desktop2:w-[50vw] desktop2:h-[50vh] bg-black relative rounded-[5px] desktop3:mx-auto desktop2:mx-auto phone:w-full phone:h-[40vh] tablet:w-full tablet:h-[40vh] laptop:w-full laptop:h-[40vh] desktop:w-full desktop:h-[40vh]">
          <img src={Image2} alt="" className="absolute inset-0 w-full h-full object-cover desktop3:rounded-[5px]" />
        </div>
        <div className="desktop3:w-[50vw] desktop3:h-[70vh] desktop2:w-[50vw] desktop2:h-[50vh] bg-black relative rounded-[5px] desktop3:mx-auto desktop2:mx-auto phone:w-full phone:h-[40vh] tablet:w-full tablet:h-[40vh] laptop:w-full laptop:h-[40vh] desktop:w-full desktop:h-[40vh]">
          <img src={Image3} alt="" className="absolute inset-0 w-full h-full object-cover desktop3:rounded-[5px]" />
        </div>
      </Slider>
      {/* <div className="desktop3:w-[50vw] desktop3:h-[50vh] desktop2:w-[50vw] desktop2:h-[50vh] bg-black relative rounded-[5px] desktop3:mx-auto desktop2:mx-auto phone:w-full phone:h-[40vh] tablet:w-full tablet:h-[40vh] laptop:w-full laptop:h-[40vh] desktop:w-full desktop:h-[40vh]">
        <img src={Image} alt="" className="absolute inset-0 w-full h-full object-cover desktop3:rounded-[5px]" />
      </div> */}
      <div className="desktop3:mt-[5rem] desktop2:mt-[5rem]   phone:mt-[3rem] tablet:mt-[3rem] laptop:mt-[3rem] desktop:mt-[2rem]">
        <div className="flex desktop3:items-center  desktop3:justify-between  desktop2:items-center  desktop2:justify-between desktop:items-center  desktop:justify-between phone:flex-col tablet:flex-col laptop:items-center  laptop:justify-between">
          <p className="text-[38px] font-bold text-[#AA941E] uppercase">Turmeric</p>
          <p className="text-[18px] text-[#9e9e9e] uppercase">Hs Code 0910.30.00</p>
        </div>
        <div className="pt-3">
          <p className="text-[20px] text-[#AA941E]">Spesifications :</p>
          <div className="flex desktop3:items-center desktop3:space-x-2  desktop2:items-center desktop2:space-x-2 desktop:items-center desktop:space-x-2 pt-1 phone:flex-col tablet:flex-col laptop:items-center laptop:space-x-2">
            <p className="text-[18px] font-bold">Includes terna plants,</p>
            <p className="text-[18px] font-bold">Pseudo-stemmed,</p>
            <p className="text-[18px] font-bold">height can reach 100 cm</p>
          </div>
        </div>
        <p className="desktop3:pt-10 desktop2:pt-10 desktop:pt-10 text-[18px] leading-[2rem] phone:pt-[1rem] tablet:pt-[1rem] laptop:pt-[1rem]">
          Turmeric, scientifically known as Curcuma longa, is a bright yellow-orange spice that comes from the root of a flowering plant in the ginger family, Zingiberaceae. It is native to South Asia and is a key ingredient in various cuisines, particularly in Indian, Southeast Asian, and Middle
          Eastern cooking. Turmeric is known for its distinctive color, earthy flavor, and numerous health benefits.
        </p>
      </div>
    </ComArticle>
  )
}

export default ArticleTiga
