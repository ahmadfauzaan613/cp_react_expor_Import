import React from 'react'
import location from '../Assets/location.png'
import email from '../Assets/mail.png'
import phone from '../Assets/telephone.png'
import ContactCard from './ContactCard'

function Contact() {
  return (
    <div className="desktop3:mx-[10%] desktop:mx-[5%] desktop2:mx-[5%] phone:px-[5%] tablet:px-[5%] laptop:px-[5%] py-[3rem]" id="contact">
      <p className="desktop3:text-[42px] desktop2:text-[36px] desktop:text-[30px] text-[#2B78BB]  phone:text-center phone:text-[30px] phone:pb-3 tablet:text-center tablet:text-[30px] tablet:pb-3 laptop:text-center laptop:text-[30px] laptop:pb-3">Contact Us</p>
      <div className="grid desktop3:grid-cols-12 desktop3:mt-5 laptop:grid-cols-2 desktop:grid-cols-2 desktop:mt-5 desktop2:grid-cols-2 desktop2:mt-5 gap-5 ">
        <div className="desktop3:col-span-5 space-y-3">
          <ContactCard imagee={location} statuss={'location'} title={` Jl budisari no.16A RT002/004 Kel. Umbansari Kec. Rumbai, kota Pekanbaru, Riau, Indonesia`} />
          <ContactCard imagee={email} statuss={'email'} title={` ghdafi@gfhadafi.company.com`} />
          <ContactCard imagee={phone} statuss={'wa'} title={` +6288271974588`} />
        </div>
        <div className="rounded-[5px] desktop3:col-span-7 border border-[#2B78BB] p-3">
          <p className="pb-1 text-[24px] font-bold">Send Message</p>
          <p className="text-[#a0a0a0] text-[14px]">Your message is very important to us. We are committed to providing the best service and ensuring your satisfaction.</p>
          <form action="" className="mt-4 space-y-3">
            <input type="text" placeholder="Full Name" className="w-full border border-[#2B78BB] rounded-[3px] p-2 outline-none" />
            <input type="email" placeholder="Email" className="w-full border border-[#2B78BB] rounded-[3px] p-2 outline-none" />
            <input type="number" placeholder="Phone Number" className="w-full border border-[#2B78BB] rounded-[3px] p-2 outline-none" />
            <textarea name="Message" placeholder="Message" id="" cols="30" rows="0" className="border border-[#2B78BB] outline-none p-3 rounded-[3px] w-full"></textarea>
            <button className="border border-[#2B78BB] p-2 desktop3:w-[20vw] phone:w-full tablet:w-full  text-[#2B78BB] font-bold hover:bg-[#2B78BB] hover:text-white rounded-[5px]">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
