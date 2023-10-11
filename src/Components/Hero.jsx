import React from 'react'
import logo from '../Assets/f5.png'
function Hero() {
  return (
    <div className="bg-black border-t border-[#AA941E]">
      <div className="flex desktop3:items-start desktop3:mx-[10%] desktop3:justify-between desktop3:py-[5rem] desktop2:items-center desktop2:mx-[5%] desktop2:justify-between desktop2:py-[5rem] phone:flex-col-reverse phone:p-3 tablet:flex-col-reverse tablet:p-3 laptop:flex-col-reverse laptop:p-3 desktop:items-center desktop:mx-[5%] desktop:justify-between desktop:py-[2rem]">
        <div>
          <p className="text-[#AA941E] desktop3:text-[52px] desktop2:text-[40px] desktop:text-[30px] font-bold uppercase  phone:text-[26px] phone:text-center tablet:text-[26px] tablet:text-center laptop:text-[26px] laptop:text-center">
            Bringing the Best <br /> of Indonesia to the World
          </p>
          <p className="text-[16px] italic desktop3:pt-3 desktop2:pt-2 desktop:pt-1 phone:text-center tablet:text-center laptop:text-center text-[#AA941E]">PT. Ghandafi Berkah Utama</p>
          <button className="mt-4 border items-center flex justify-center text-[14px]  gap-2 border-[#AA941E] text-[#AA941E] hover:bg-[#AA941E] hover:text-white rounded-[5px] desktop3:py-2 desktop3:w-[10vw] desktop2:py-2 desktop2:w-[15vw] desktop:py-1 desktop:w-[20vw] phone:mx-auto phone:p-3 tablet:mx-auto tablet:p-3 laptop:mx-auto laptop:p-3">
            <span className="material-symbols-outlined">description</span>Portofolio Company
          </button>
        </div>
        <img src={logo} alt="" className="desktop3:w-[30vw] desktop:w-[30vw] desktop2:w-[30vw]  phone:w-[70vw] phone:mx-auto phone:mb-10 phone:mt-5 tablet:w-[50vw] tablet:mx-auto tablet:mb-10 tablet:mt-5 laptop:w-[50vw] laptop:mx-auto laptop:mb-10 laptop:mt-5" />
        {/* <div className="w-[35vw] h-[40vh] desktop:w-[40vw] desktop:h-[30vh] desktop2:w-[35vw] desktop2:h-[40vh] bg-black relative rounded-[5px] phone:w-full phone:mb-4 laptop:w-full laptop:mb-4 tablet:w-full tablet:mb-4">
        <img src={r8} alt="" className="absolute inset-0 w-full h-full object-cover desktop3:rounded-[5px]" />
      </div> */}
      </div>
    </div>
  )
}

export default Hero
