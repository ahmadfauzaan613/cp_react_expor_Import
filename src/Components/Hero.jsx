import React from 'react'
import logo from '../Assets/logoGdf.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
function Hero() {
  return (
    <div className="bg-[#0F0F0F] border-t border-[#AFBD77] ">
      <div className="flex desktop3:items-center desktop3:mx-[10%] desktop3:justify-between desktop3:py-[5rem] desktop2:items-center desktop2:mx-[5%] desktop2:justify-between desktop2:py-[5rem] phone:flex-col-reverse phone:p-3 tablet:flex-col-reverse tablet:p-3 laptop:flex-col-reverse laptop:p-3 desktop:items-center desktop:mx-[5%] desktop:justify-between desktop:py-[2rem]">
        <div>
          <p className="text-[#AFBD77] desktop3:text-[52px] desktop2:text-[40px] desktop:text-[30px] font-bold uppercase  phone:text-[26px] phone:text-center tablet:text-[26px] tablet:text-center laptop:text-[26px] laptop:text-center">
            Bringing the Best <br /> of Indonesia to the World
          </p>
          <p className="text-[16px] italic desktop3:pt-3 desktop2:pt-2 desktop:pt-1 phone:text-center tablet:text-center laptop:text-center text-[#AFBD77]">PT. Ghandafi Berkah Utama</p>
          <button className="mt-4 border border-[#AFBD77] items-center flex justify-center text-[14px]  gap-2  text-[#AFBD77] hover:bg-[#AFBD77] hover:text-white hover:font-bold rounded-[5px] desktop3:py-2 desktop3:w-[10vw] desktop2:py-2 desktop2:w-[15vw] desktop:py-1 desktop:w-[20vw] phone:mx-auto phone:p-3 tablet:mx-auto tablet:p-3 laptop:mx-auto laptop:p-3">
            <span className="material-symbols-outlined">description</span>Portofolio Company
          </button>
        </div>
        <LazyLoadImage src={logo} alt="" className="desktop3:w-[30vw] desktop:w-[30vw] desktop2:w-[30vw]  phone:w-[70vw] phone:mx-auto phone:mb-10 phone:mt-5 tablet:w-[50vw] tablet:mx-auto tablet:mb-10 tablet:mt-5 laptop:w-[50vw] laptop:mx-auto laptop:mb-10 laptop:mt-5" />
      </div>
    </div>
  )
}

export default Hero
