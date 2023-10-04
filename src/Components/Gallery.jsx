import React from 'react'
import Content2 from '../Assets/content_2.jpg'
import Content3 from '../Assets/content_3.jpg'
function Gallery() {
  return (
    <div className="container mx-auto mt-[3rem] mb-[5rem]" id="gallery">
      <p className=" font-bold text-[32px] text-[#557A46]">Gallery</p>
      <div className="grid grid-cols-4 gap-10 mt-8 mb-16">
        <div className="w-full h-[36vh] bg-black relative rounded-[5px]">
          <img src={Content2} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
        </div>
        <div className="w-full h-[36vh] bg-black relative rounded-[5px]">
          <img src={Content3} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
        </div>
        <div className="w-full h-[36vh] bg-black relative rounded-[5px]">
          <img src={Content3} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
        </div>
        <div className="w-full h-[36vh] bg-black relative rounded-[5px]">
          <img src={Content2} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
        </div>
        <div className="w-full h-[36vh] bg-black relative rounded-[5px]">
          <img src={Content3} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
        </div>
        <div className="w-full h-[36vh] bg-black relative rounded-[5px]">
          <img src={Content3} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
        </div>
        <div className="w-full h-[36vh] bg-black relative rounded-[5px]">
          <img src={Content3} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
        </div>
        <div className="w-full h-[36vh] bg-black relative rounded-[5px]">
          <img src={Content3} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
        </div>
      </div>
      <button className="border border-[#557A46] text-[18px] p-2 w-full text-[#557A46] font-bold hover:bg-[#557A46] hover:text-white rounded-[5px]">See More</button>
    </div>
  )
}

export default Gallery
