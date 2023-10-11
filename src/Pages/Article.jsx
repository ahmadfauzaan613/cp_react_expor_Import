import React from 'react'
import ComArticle from '../Components/ComArticle'
import Image1 from '../Assets/content/WhatsApp Image 2023-10-08 at 19.15.11_6dd0f9ec.jpg'
import Image2 from '../Assets/content/r7.jpg'

import Slider from 'react-slick'

function Article() {
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
      </Slider>
      {/* <div className="desktop3:w-[50vw] desktop3:h-[50vh] desktop2:w-[50vw] desktop2:h-[50vh] bg-black relative rounded-[5px] desktop3:mx-auto desktop2:mx-auto phone:w-full phone:h-[40vh] tablet:w-full tablet:h-[40vh] laptop:w-full laptop:h-[40vh] desktop:w-full desktop:h-[40vh]">
        <img src={Image} alt="" className="absolute inset-0 w-full h-full object-cover desktop3:rounded-[5px]" />
      </div> */}
      <div className="desktop3:mt-[5rem] desktop2:mt-[5rem]  phone:mt-[3rem] tablet:mt-[3rem] laptop:mt-[3rem] desktop:mt-[2rem]">
        <div className="flex desktop3:items-center  desktop3:justify-between  desktop2:items-center  desktop2:justify-between desktop:items-center  desktop:justify-between phone:flex-col tablet:flex-col laptop:items-center  laptop:justify-between">
          <p className="text-[38px] font-bold text-[#AA941E] uppercase">Cinnamon</p>
          <p className="text-[18px] text-[#9e9e9e] uppercase">Hs Code 0906</p>
        </div>
        <div className="pt-3">
          <p className="text-[20px] text-[#AA941E]">Spesifications :</p>
          <div className="flex desktop3:items-center desktop3:space-x-2  desktop2:items-center desktop2:space-x-2 desktop:items-center desktop:space-x-2 pt-1 phone:flex-col tablet:flex-col laptop:items-center laptop:space-x-2">
            <p className="text-[18px] font-bold">Cinammon roll,</p>
            <p className="text-[18px] font-bold">Cutting 8cm,</p>
            <p className="text-[18px] font-bold">Grade A,</p>
            <p className="text-[18px] font-bold">Dry,</p>
            <p className="text-[18px] font-bold">Fragrant,</p>
            <p className="text-[18px] font-bold">Spicy</p>
          </div>
        </div>
        <p className="desktop3:pt-10 desktop2:pt-10 desktop:pt-10 text-[18px] leading-[2rem] phone:pt-[1rem] tablet:pt-[1rem] laptop:pt-[1rem]">
          Cinnamon is widely used as a spice and flavoring agent in both sweet and savory dishes. It has a warm, aromatic, and slightly sweet taste. Cinnamon is often used in baked goods like cinnamon rolls, pies, and cookies, as well as in beverages such as spiced teas and coffees. It's also a
          common ingredient in many spice blends, like pumpkin pie spice and curry powder. Cinnamon has been used for centuries for its potential health benefits and has a long history of use in traditional medicine. It is believed to have antioxidant and anti-inflammatory properties and may help
          regulate blood sugar levels and improve overall health. Cinnamon can be purchased in various forms, including ground cinnamon, cinnamon sticks (which are pieces of the bark), and cinnamon oil. It's a versatile spice that adds depth and warmth to a wide range of culinary creations.
        </p>
      </div>
    </ComArticle>
  )
}

export default Article
