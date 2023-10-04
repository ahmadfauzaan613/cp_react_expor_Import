import React from 'react'

function Navbar() {
  return (
    <div className=" w-full py-[1.7rem] container  mx-auto flex items-center justify-between">
      <h3 className="text-[20px] font-bold text-[#557A46]">PT Ghandafi Berkah Utama</h3>
      <div className="flex items-center">
        <a href="#about" className="text-[16px] text-[#8EAC50] hover:text-[#557A46] hover:font-bold w-[6vw] cursor-pointer">
          About
        </a>
        <a href="#product" className="text-[16px] text-[#8EAC50] hover:text-[#557A46] hover:font-bold w-[6vw] cursor-pointer">
          Product
        </a>
        <a href="#gallery" className="text-[16px] text-[#8EAC50] hover:text-[#557A46] hover:font-bold w-[6vw] cursor-pointer">
          Gallery
        </a>
        <a href="#contact" className="text-[16px] text-[#8EAC50] hover:text-[#557A46] hover:font-bold w-[6vw] cursor-pointer">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
