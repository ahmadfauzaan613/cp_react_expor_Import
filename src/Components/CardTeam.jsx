import React from 'react'

function CardTeam(props) {
  return (
    <div className="border border-[#AA941E] rounded-[5px] desktop3:w-[20vw] desktop:w-[30vw] desktop2:w-[30vw] h-full phone:mb-4 ">
      <div className="desktop3:w-full desktop3:h-[40vh] desktop:w-full desktop2:h-[40vh] desktop2:w-full desktop:h-[40vh] phone:w-full phone:h-[45vh] tablet:w-full tablet:h-[45vh] laptop:w-full laptop:h-[45vh] bg-black relative rounded-[5px] ">
        <img src={props.img} alt="" className="absolute inset-0 w-full h-full object-cover desktop3:rounded-[5px]" />
      </div>
      <div className="p-3 space-y-2">
        <p className="text-[28px] phone:text-[24px]  tablet:text-[24px] laptop:text-[24px] text-[#AA941E] font-bold">{props.name}</p>
        <p className="text-[16px] phone:text-[14px]  tablet:text-[14px] laptop:text-[16px] text-[#AA941E]">{props.position}</p>
      </div>
    </div>
  )
}

export default CardTeam
