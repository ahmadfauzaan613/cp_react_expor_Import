import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function CardProduct(props) {
  return (
    <div className={`${props.cardBg === 'one' ? 'bg-[#2B78BB]' : props.cardBg === 'two' ? 'bg-[#CB7246]' : 'bg-[#AFBD77]'} p-[1rem] ${props.position === 'last' && 'desktop3:rounded-l-[5px]'} ${props.position === 'first' && 'desktop3:rounded-r-[5px]'}`}>
      <div className="flex justify-center pt-[1rem] pb-[2rem]">
        <LazyLoadImage src={props.img} className="w-[60px]" />
      </div>
      <h5 className="text-white pb-1 text-[18px]">{props.judul}</h5>
      <p className="text-white ">{props.desc}</p>
    </div>
  )
}

export default CardProduct
