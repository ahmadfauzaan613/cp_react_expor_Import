import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function CardCompany(props) {
  return (
    <div className="border border-[#2B78BB] rounded-[5px] ">
      <div className="w-full h-[35vh] relative">
        <LazyLoadImage src={props.img} className="absolute inset-0 w-full h-full object-cover " />
      </div>
      {props.type === 'shipping' && (
        <div className="p-3">
          <p className="text-[20px] text-[#2B78BB] pb-2">{props.title}</p>
          <p>Free On Board (FOB)</p>
          <p className="py-2">Cost and Freight (CNF)</p>
          <p>Cost, Insurance, Freight (CIF)</p>
        </div>
      )}
      {props.type === 'payment' && (
        <div className="p-3">
          <p className="text-[20px] text-[#2B78BB] pb-2">{props.title}</p>
          <div className="flex items-start gap-2 pb-2">
            <p>
              BANK T/T <br />
              <span className="text-[14px]">(50% DOWN PAYMENT, 50% AGAINTS COPY BL)</span>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <p>
              BANK T/T <br />
              <span className="text-[14px]">(50% DOWN PAYMENT, 50% BY LC IRREVOCABLE AT SIGHT )</span>
            </p>
          </div>
        </div>
      )}
      {props.type === 'lading' && (
        <div className="p-3">
          <p className="text-[20px] text-[#2B78BB] pb-2">{props.title}</p>
          <div className="flex items-center gap-2">
            <a href="https://maps.app.goo.gl/EZUPKVbk6AcQzeeC6" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#AA941E] hover:font-bold">
              BELAWAN PORT
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardCompany
