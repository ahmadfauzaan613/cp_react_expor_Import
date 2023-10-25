import React from 'react'
import certiPT from '../Assets/SertifikatPT.pdf'
import npwpPT from '../Assets/230121239550NPWP.pdf'
function About() {
  return (
    <div className="desktop3:mx-[10%] desktop:mx-[5%] desktop2:mx-[5%] phone:px-[5%] tablet:px-[5%] laptop:px-[5%] py-[3rem]" id="about">
      <p className="desktop3:text-[42px] desktop2:text-[36px] desktop:text-[30px] text-[#2B78BB]  phone:text-center phone:text-[30px] phone:pb-3 tablet:text-center tablet:text-[30px] tablet:pb-3 laptop:text-center laptop:text-[30px] laptop:pb-3">About</p>
      <div className="desktop3:grid desktop3:grid-cols-2 desktop3:gap-5 desktop2:grid desktop2:grid-cols-2 desktop2:gap-5 desktop:grid desktop:grid-cols-2 desktop:gap-7">
        <div>
          <p className="text-[16px] leading-[2rem] py-3 phone:text-justify tablet:text-justify laptop:text-justify">
            <span className="font-bold">PT. Ghandafi Berakah Utama</span> is your trusted supplier and exporter of high quality shallot and cinnamon products in Indonesia. The production site is located in the long stretch of Indonesia on the island of Sumatra. Our product lines are agribusiness,
            such as{' '}
            <span className="font-bold">
              shallots, cinnamon, <span className="font-normal">and</span> turmeric
            </span>
            . We are committed to delivering the highest quality products from raw materials, production process to packaging. With the target of a sustainable and long-term relationship.
          </p>
          <div className="flex items-center gap-7">
            <a href={certiPT} download="Company Certificate PT. Ghandafi Berkah Utama.pdf" target="_blank" rel="noreferrer">
              <p className="text-[#AFBD77] flex items-center gap-2 hover:font-bold cursor-pointer italic">
                <span class="material-symbols-outlined">description</span>Company Certificate
              </p>
            </a>
            <a href={npwpPT} download="NPWP PT. Ghandafi Berkah Utama.pdf" target="_blank" rel="noreferrer">
              <p className="text-[#CB7246] flex items-center gap-2  hover:font-bold cursor-pointer italic">
                <span class="material-symbols-outlined">description</span>Company NPWP
              </p>
            </a>
          </div>
        </div>

        <div className="border border-[#2B78BB] rounded-[5px] p-3 phone:my-2  tablet:my-2 laptop:my-2">
          <p className="text-[22px] text-[#2B78BB] phone:text-center tablet:text-center laptop:text-center">Visi</p>
          <div className="flex items-start gap-3 pt-3">
            <p className="text-[16px] font-bold">1.</p>
            <p className="text-[16px]">To be a trusted and leading international trading company</p>
          </div>
          <div className="mt-3">
            <p className="text-[22px] text-[#2B78BB] phone:text-center tablet:text-center laptop:text-center">Misi</p>
            <div className="flex items-start gap-3 py-3">
              <p className="text-[16px] font-bold">1.</p>
              <p className="text-[16px]">Conduct general and specialized trading for food and non-food products from upstream to downstream, targeting domestic and international markets.</p>
            </div>
            <div className="flex items-start gap-3">
              <p className="text-[16px] font-bold">2.</p>
              <p className="text-[16px]">Deliver quality products, competitive prices, and usefulness to ensure customer satisfaction, and establish sustainable partnerships.</p>
            </div>
            <p className="text-[16px] "></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
