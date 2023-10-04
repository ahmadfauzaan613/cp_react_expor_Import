import React from 'react'
import Content6 from '../Assets/content_6.png'
function About() {
  return (
    <div className="container mx-auto grid grid-cols-12 py-[5rem]">
      <div className="col-span-7">
        <p className="text-[32px] font-bold pb-3 text-[#557A46]">About Us</p>
        <p className="text-[16px] w-[40vw]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, impedit quam itaque voluptatum animi fugit nesciunt in, brreiciendis assumenda vero earum quo illum praesentium? Dignissimos deleniti eum animi ab atque? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, impedit
          quam itaque voluptatum animi fugit nesciunt in, brreiciendis assumenda vero earum quo illum praesentium? Dignissimos deleniti eum animi ab atque? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, impedit quam itaque voluptatum animi fugit nesciunt in, brreiciendis assumenda
          vero earum quo illum praesentium? Dignissimos deleniti eum animi ab atque?
        </p>
      </div>
      <div className="col-span-5 w-full h-[35vh] bg-black relative rounded-[5px]">
        <img src={Content6} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[5px]" />
      </div>
    </div>
  )
}

export default About
