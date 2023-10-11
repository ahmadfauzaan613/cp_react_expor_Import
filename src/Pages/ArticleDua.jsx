import React from 'react'
import ComArticle from '../Components/ComArticle'
import Image1 from '../Assets/content/WhatsApp Image 2023-10-06 at 20.49.27_b3f24394.jpg'
import Image2 from '../Assets/content/r5.jpg'
import Image3 from '../Assets/content/r3.jpg'
import Image4 from '../Assets/content/r2.jpg'
import Image5 from '../Assets/content/WhatsApp Image 2023-10-06 at 20.51.13_6ae0b61f.jpg'
import Slider from 'react-slick'

function ArticleDua() {
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
        <div className="desktop3:w-[50vw] desktop3:h-[70vh] desktop2:w-[50vw] desktop2:h-[50vh] bg-black relative rounded-[5px] desktop3:mx-auto desktop2:mx-auto phone:w-full phone:h-[40vh] tablet:w-full tablet:h-[40vh] laptop:w-full laptop:h-[40vh] desktop:w-full desktop:h-[40vh]">
          <img src={Image4} alt="" className="absolute inset-0 w-full h-full object-cover desktop3:rounded-[5px]" />
        </div>
        <div className="desktop3:w-[50vw] desktop3:h-[70vh] desktop2:w-[50vw] desktop2:h-[50vh] bg-black relative rounded-[5px] desktop3:mx-auto desktop2:mx-auto phone:w-full phone:h-[40vh] tablet:w-full tablet:h-[40vh] laptop:w-full laptop:h-[40vh] desktop:w-full desktop:h-[40vh]">
          <img src={Image5} alt="" className="absolute inset-0 w-full h-full object-cover desktop3:rounded-[5px]" />
        </div>
      </Slider>
      {/* <div className="desktop3:w-[50vw] desktop3:h-[50vh] desktop2:w-[50vw] desktop2:h-[50vh] bg-black relative rounded-[5px] desktop3:mx-auto desktop2:mx-auto phone:w-full phone:h-[40vh] tablet:w-full tablet:h-[40vh] laptop:w-full laptop:h-[40vh] desktop:w-full desktop:h-[40vh]">
        <img src={Image} alt="" className="absolute inset-0 w-full h-full object-cover desktop3:rounded-[5px]" />
      </div> */}
      <div className="desktop3:mt-[5rem] desktop2:mt-[5rem]  phone:mt-[3rem] tablet:mt-[3rem] laptop:mt-[3rem] desktop:mt-[2rem]">
        <div className="flex desktop3:items-center  desktop3:justify-between  desktop2:items-center  desktop2:justify-between desktop:items-center  desktop:justify-between phone:flex-col tablet:flex-col laptop:items-center  laptop:justify-between">
          <p className="text-[38px] font-bold text-[#AA941E] uppercase">Shallots</p>
          <p className="text-[18px] text-[#9e9e9e] uppercase">Hs Code 070310</p>
        </div>
        <div className="pt-3">
          <p className="text-[20px] text-[#AA941E]">Spesifications :</p>
          <div className="flex desktop3:items-center desktop3:space-x-2  desktop2:items-center desktop2:space-x-2 desktop:items-center desktop:space-x-2 pt-1 phone:flex-col tablet:flex-col laptop:items-center laptop:space-x-2">
            <p className="text-[18px] font-bold">round shape not oval,</p>
            <p className="text-[18px] font-bold">bright red in color</p>
          </div>
        </div>
        <p className="desktop3:pt-10 desktop2:pt-10 desktop:pt-10 text-[18px] leading-[2rem] phone:pt-[1rem] tablet:pt-[1rem] laptop:pt-[1rem]">
          Shallots are a type of small, bulbous vegetable that belong to the Allium family, which also includes onions and garlic. They are characterized by their elongated shape and thin, reddish-brown or greyish skin. When you peel shallots, you'll find that they have multiple cloves, similar to
          garlic, but they are typically larger in size. Shallots have a milder and sweeter flavor compared to regular onions, and they add a subtle, delicate onion flavor to dishes. They are commonly used in various cuisines, including French and Asian, to enhance the taste of sauces, dressings,
          and a wide range of dishes. Shallots can be minced, sliced, or used whole in recipes, depending on the desired flavor and presentation. They are prized for their ability to add depth and complexity to culinary creations.
        </p>
      </div>
    </ComArticle>
  )
}

export default ArticleDua
