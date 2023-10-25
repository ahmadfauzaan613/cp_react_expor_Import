import React from 'react'
import logo from '../Assets/logoGdf.png'
function Footer() {
  return (
    <div className="mt-4 bg-black py-[2rem]">
      <div className=" mx-[10%] flex desktop3:items-center desktop3:justify-between desktop2:items-center desktop2:justify-between desktop:items-center desktop:justify-between laptop:items-center laptop:justify-between phone:flex-col tablet:flex-col">
        <img src={logo} alt="" className="desktop3:w-[8vw] desktop:w-[15vw] desktop2:w-[10vw] laptop:w-[15vw] phone:w-[40vw] phone:mx-auto tablet:w-[30vw] tablet:mx-auto" />
        <p className="text-right font-bold text-[#AFBD77] phone:text-center phone:mt-10 tablet:text-center tablet:mt-10">
          BRINGING THE BEST OF INDONESIA <br /> TO THE WORLD
        </p>
      </div>
    </div>
  )
}

export default Footer
