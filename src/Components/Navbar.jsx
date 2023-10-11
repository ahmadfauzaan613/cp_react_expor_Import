import React, { useState } from 'react'
import Logo from '../Assets/logo.png'
function Navbar() {
  const [open, setOpen] = useState(false)
  const openMenu = () => {
    setOpen(!open)
  }
  return (
    <div className="bg-black desktop3:px-[10%] desktop2:px-[5%] desktop:px-[5%]  laptop:px-[5%]">
      <div className=" w-full py-[1.2rem]  flex items-center justify-between phone:items-start phone:px-[5%] tablet:items-center tablet:px-[5%]">
        <img src={Logo} alt="" className="desktop3:w-[6.5vw] desktop2:w-[7.5vw] desktop:w-[10vw] phone:w-[20vw] tablet:w-[20vw] laptop:w-[15vw]" />
        <div className="flex items-center phone:hidden tablet:hidden ">
          <a href="/" className="text-[16px] text-[#AA941E]  hover:font-bold desktop3:w-[6vw] desktop2:w-[7vw] desktop:w-[9vw] laptop:w-[11vw]  cursor-pointer outline-none">
            Home
          </a>
          <a href="#about" className="text-[16px] text-[#AA941E]  hover:font-bold desktop3:w-[6vw] desktop2:w-[7vw] desktop:w-[9vw] laptop:w-[11vw]  cursor-pointer outline-none">
            About
          </a>
          <a href="#product" className="text-[16px] text-[#AA941E] hover:font-bold desktop3:w-[6vw] desktop2:w-[7vw] desktop:w-[9vw]  laptop:w-[11vw] cursor-pointer outline-none">
            Product
          </a>
          <a href="#team" className="text-[16px] text-[#AA941E] hover:font-bold desktop3:w-[6vw] desktop2:w-[7vw] desktop:w-[9vw]  laptop:w-[11vw] cursor-pointer outline-none">
            Team
          </a>
          <a href="#gallery" className="text-[16px] text-[#AA941E] hover:font-bold desktop3:w-[6vw] desktop2:w-[7vw] desktop:w-[9vw]  laptop:w-[11vw] cursor-pointer outline-none">
            Gallery
          </a>
          <a href="#contact" className="text-[16px] text-[#AA941E] hover:font-bold desktop3:w-[6vw] desktop2:w-[7vw] desktop:w-[9vw]  laptop:w-[11vw] cursor-pointer outline-none">
            Contact
          </a>
        </div>
        <div className="desktop3:hidden desktop2:hidden desktop:hidden laptop:hidden phone:relative tablet:relative">
          {open ? (
            <span onClick={openMenu} className="material-symbols-outlined text-[#AA941E] text-[28px] cursor-pointer">
              close
            </span>
          ) : (
            <span onClick={openMenu} className="material-symbols-outlined text-[#AA941E] text-[28px] cursor-pointer">
              menu
            </span>
          )}
        </div>
      </div>
      {open && (
        <div className="desktop3:hidden desktop2:hidden desktop:hidden laptop:hidden z-10 absolute bg-[#AA941E] w-full top-[4.5rem] phone:px-[5%] tablet:px-[5%] ">
          <ul className="phone:py-[3%] phone:space-y-4 tablet:py-[3%] tablet:space-y-4">
            <li>
              <a href="/" className="text-[16px]  hover:font-bold w-[6vw] cursor-pointer outline-none">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-[16px]  hover:font-bold w-[6vw] cursor-pointer outline-none">
                About
              </a>
            </li>
            <li>
              <a href="#product" className="text-[16px]  hover:font-bold w-[6vw] cursor-pointer outline-none">
                Product
              </a>
            </li>
            <li>
              <a href="#team" className="text-[16px]  hover:font-bold w-[6vw] cursor-pointer outline-none">
                Team
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-[16px]  hover:font-bold w-[6vw] cursor-pointer outline-none">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="text-[16px]  hover:font-bold w-[6vw] cursor-pointer outline-none">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
