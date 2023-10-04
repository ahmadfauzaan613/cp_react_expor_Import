import React from 'react'
import icon3 from '../Assets/icon_3.png'
import content5 from '../Assets/content_5.png'
import icon5 from '../Assets/icon_5.png'
import icon6 from '../Assets/icon_6.png'
import icon7 from '../Assets/icon_7.png'
import icon8 from '../Assets/icon_8.png'
function Product() {
  return (
    <div className="container mx-auto " id="product">
      <p className="text-[32px] font-bold  text-[#557A46]">Product</p>
      <div className="grid grid-cols-2 mt-8 gap-32 mb-[5rem]">
        <div className="border-[#8EAC50] border-b-2 p-3  flex justify-between">
          <div className="space-y-4">
            <p className="text-[32px] font-bold text-[#8EAC50]">Bawang Merah</p>
            <p className="text-[16px]  w-[23vw]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat consequatur quae architecto magnam</p>
            <p className="text-[#8EAC50] cursor-pointer hover:text-[#557A46] hover:font-bold">View Detail</p>
          </div>
          <img src={content5} alt="" className="w-[10vw] h-full" />
        </div>
        <div className="border-[#8EAC50] border-b-2 p-3  flex justify-between">
          <div className="space-y-4">
            <p className="text-[32px] font-bold text-[#8EAC50]">Kayu Manis</p>
            <p className="text-[16px]  w-[23vw]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat consequatur quae architecto magnam</p>
            <p className="text-[#8EAC50] cursor-pointer hover:text-[#557A46] hover:font-bold">View Detail</p>
          </div>
          <img src={icon8} alt="" className="w-[10vw] h-full" />
        </div>
      </div>
      <div className="flex items-center justify-center py-[1.3rem] ">
        <div className="bg-[#557A46] rounded-l-[5px] p-[1rem]">
          <div className="flex justify-center py-[0.5rem]">
            <img src={icon3} alt="" className="w-[3.2vw]" />
          </div>
          <h5 className="text-white pb-3">Test1</h5>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi consectetur hic velit placeat earum, perspiciatis atque quasi quis corrupti nihil omnis possimus, itaque illo sapiente iusto. Repudiandae, corporis unde?</p>
        </div>
        <div className="bg-[#8EAC50] p-[1rem]">
          <div className="flex justify-center py-[0.5rem]">
            <img src={icon5} alt="" className="w-[3.2vw]" />
          </div>
          <h5 className="text-white pb-3">Test1</h5>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi consectetur hic velit placeat earum, perspiciatis atque quasi quis corrupti nihil omnis possimus, itaque illo sapiente iusto. Repudiandae, corporis unde?</p>
        </div>
        <div className="bg-[#557A46] p-[1rem]">
          <div className="flex justify-center py-[0.5rem]">
            <img src={icon6} alt="" className="w-[3.2vw]" />
          </div>
          <h5 className="text-white pb-3">Test1</h5>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi consectetur hic velit placeat earum, perspiciatis atque quasi quis corrupti nihil omnis possimus, itaque illo sapiente iusto. Repudiandae, corporis unde?</p>
        </div>
        <div className="bg-[#8EAC50]  rounded-r-[5px] p-[1rem]">
          <div className="flex justify-center py-[0.5rem]">
            <img src={icon7} alt="" className="w-[3.2vw]" />
          </div>
          <h5 className="text-white pb-3">Test1</h5>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi consectetur hic velit placeat earum, perspiciatis atque quasi quis corrupti nihil omnis possimus, itaque illo sapiente iusto. Repudiandae, corporis unde?</p>
        </div>
      </div>
    </div>
  )
}

export default Product
