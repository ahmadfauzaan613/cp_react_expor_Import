import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function CardProduct(props) {
  return (
    <div className={`${props.cardBg === true ? 'bg-[#cfb732]' : 'bg-[#AA941E]'} p-[1rem] ${props.position === 'last' && 'desktop3:rounded-l-[5px]'} ${props.position === 'first' && 'desktop3:rounded-r-[5px]'}`}>
      <div className="flex justify-center pt-[1rem] pb-[2rem]">
        <LazyLoadImage src={props.img} className="w-[60px]" />
      </div>
      <h5 className="text-white pb-1 text-[18px]">{props.judul}</h5>
      <p className="text-white ">{props.desc}</p>
    </div>
  )
}

export default CardProduct
