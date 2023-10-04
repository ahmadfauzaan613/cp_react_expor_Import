import React from 'react'
import location from '../Assets/location.png'
import email from '../Assets/mail.png'
import phone from '../Assets/telephone.png'
import map2 from '../Assets/map2.png'
function Contact() {
  return (
    <div className="container  mx-auto rounded-[5px] border border-[#557A46] " id="contact">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 p-5">
          <div>
            <p className="text-[32px] font-bold text-[#557A46]">Get In Touch</p>
            <p className="text-[16px] text-[#8a8989]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et corporis magnam eaque cum non laboriosam quod quia, dolor delectus aliquid. Similique</p>
          </div>
          <form action="" className="mt-9 space-y-6">
            <input type="text" placeholder="Full Name" className="w-full border border-[#557A46] rounded-[3px] p-2 outline-none" />
            <input type="email" placeholder="Email" className="w-full border border-[#557A46] rounded-[3px] p-2 outline-none" />
            <input type="number" placeholder="Phone Number" className="w-full border border-[#557A46] rounded-[3px] p-2 outline-none" />
            <textarea name="Message" placeholder="Message" id="" cols="30" rows="10" className="border border-[#557A46] outline-none p-3 rounded-[3px] w-full"></textarea>
            <button className="border border-[#557A46] p-2 w-full text-[#557A46] font-bold hover:bg-[#557A46] hover:text-white rounded-[5px]">Send Message</button>
          </form>
        </div>
        <div className="bg-[#557A46] col-span-6">
          <div className="p-5">
            <p className="text-[32px] font-bold text-white">Contact Us</p>
            <div className="mt-5 space-y-8">
              <hr className="w-full text-white" />
              <div className="col-span-5 w-full h-[35vh] bg-black relative rounded-[5px]">
                <img src={map2} alt="" className="absolute inset-0 cursor-pointer w-full h-full object-cover rounded-[5px]" />
              </div>
              <div className="flex items-center gap-5">
                <img src={location} alt="" className="w-[1.5vw] h-full" />
                <p className="text-white text-[18px]">
                  Jl budisari no.16A RT002/004 Kel. Umbansari Kec. Rumbai, <br /> kota Pekanbaru, Riau, Indonesia
                </p>
              </div>
              <div className="flex items-center gap-5">
                <img src={email} alt="" className="w-[1.5vw] h-full" />
                <p className="text-white text-[18px]">ghdafi@gfhadafi.company.com</p>
              </div>
              <div className="flex items-center gap-5">
                <img src={phone} alt="" className="w-[1.5vw] h-full" />
                <p className="text-white text-[18px]">+6281393213213</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
