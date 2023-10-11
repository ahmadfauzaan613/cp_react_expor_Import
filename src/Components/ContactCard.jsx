import React from 'react'

function ContactCard(props) {
  return (
    <div className="flex items-center gap-3 bg-[#AA941E] p-2 rounded-[5px]">
      <img src={props.imagee} alt="" className="desktop3:w-[1.5vw] desktop2:w-[1.5vw] desktop:w-[1.5vw] phone:w-[5vw] tablet:w-[4vw] laptop:w-[3vw]" />
      {props.statuss === 'wa' && (
        <a href="https://wa.me/6288271974588" rel="noreferrer" target="_blank">
          <p className="text-white desktop3:text-[14px] desktop:text-[14px] desktop2:text-[14px] phone:text-[12px] tablet:text-[12px] laptop:text-[12px]">{props.title}</p>
        </a>
      )}
      {props.statuss === 'email' && <p className="text-white desktop3:text-[14px] desktop:text-[14px] desktop2:text-[14px] phone:text-[12px] tablet:text-[12px] laptop:text-[12px]">{props.title}</p>}
      {props.statuss === 'location' && (
        <a href="https://maps.app.goo.gl/LcfLgTVnMjiEtSjN7" rel="noreferrer" target="_blank">
          <p className="text-white desktop3:text-[14px] desktop:text-[14px] desktop2:text-[14px] phone:text-[12px] tablet:text-[12px] laptop:text-[12px]">{props.title}</p>
        </a>
      )}
    </div>
  )
}

export default ContactCard
