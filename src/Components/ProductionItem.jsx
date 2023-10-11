import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductionItem(props) {
  const navigate = useNavigate()
  return (
    <div className="border border-[#AA941E] p-3 rounded-[5px] flex phone:flex-col-reverse tablet:flex-col-reverse desktop:flex-col-reverse ">
      <div className="desktop3:space-y-3 desktop2:space-y-3 desktop:space-y-2 phone:mt-3 phone:pb-2 phone:space-y-2 tablet:mt-3 tablet:pb-2 tablet:space-y-2 laptop:space-y-3">
        <p className="text-[22px] text-[#AA941E] font-bold phone:text-center tablet:text-center">{props.title}</p>
        <p className="text-[14px] laptop:text-[16px] text-[#7b7b7b] phone:text-center tablet:text-center">{props.code}</p>
        <p className="text-[14px] laptop:text-[16px] text-[#7b7b7b] phone:text-center tablet:text-center">
          Specifications : <br /> {props.desc}
        </p>
        <p onClick={() => navigate(props.click)} className="text-[14px] hover:text-[#AA941E] hover:font-bold cursor-pointer phone:text-center tablet:text-center">
          View Detail
        </p>
      </div>
      <img src={props.image} alt="" className="desktop3:w-[9vw] desktop3:h-full desktop2:w-[8vw] desktop2:h-full phone:w-[35vw] phone:mx-auto tablet:w-[20vw] tablet:mx-auto laptop:w-[20vw] laptop:mx-auto desktop:w-[12vw] desktop:mx-auto desktop:mb-2" />
    </div>
  )
}

export default ProductionItem