import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ProductionItem(props) {
  return (
    <div className={`${props.bgCard === 'one' ? 'border-[#2B78BB]' : props.bgCard === 'two' ? 'border-[#CB7246]' : 'border-[#AFBD77]'} border  p-3 rounded-[5px] flex gap-4 items-center phone:flex-col-reverse tablet:flex-col-reverse desktop:flex-col-reverse`}>
      <div className="desktop3:space-y-3 desktop2:space-y-3 desktop:space-y-2 phone:mt-3 phone:pb-2 phone:space-y-2 tablet:mt-3 tablet:pb-2 tablet:space-y-2 laptop:space-y-3">
        <p className={`text-[22px] ${props.bgCard === 'one' ? 'text-[#2B78BB]' : props.bgCard === 'two' ? 'text-[#CB7246]' : 'text-[#AFBD77]'}  font-bold phone:text-center tablet:text-center`}>{props.title}</p>
        <p className="text-[14px] laptop:text-[16px] text-[#7b7b7b] phone:text-center tablet:text-center">{props.code}</p>
        <p className="text-[14px] laptop:text-[16px] text-[#7b7b7b] phone:text-center tablet:text-center">
          Specifications : <br /> {props.desc}
        </p>
        {/* <p onClick={() => navigate(props.click)} className={`text-[14px] ${props.bgCard === 'one' ? 'hover:text-[#2B78BB]' : props.bgCard === 'two' ? 'hover:text-[#CB7246]' : 'hover:text-[#AFBD77]'} hover:font-bold cursor-pointer phone:text-center tablet:text-center`}>
          View Detail
        </p> */}
      </div>
      <LazyLoadImage src={props.image} className="desktop3:w-[8vw]  desktop3:h-[15vh] desktop2:w-[10vw] desktop2:ml-auto desktop2:h-full phone:w-[35vw] phone:mx-auto tablet:w-[20vw] tablet:mx-auto laptop:w-[20vw] laptop:h-full laptop:ml-auto desktop:w-[12vw] desktop:mx-auto desktop:mb-2" />
    </div>
  )
}

export default ProductionItem
