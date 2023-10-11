import React from 'react'
import product from '../Assets/product.png'
import handlewith from '../Assets/handle-with-care.png'
import interview from '../Assets/interview.png'
import badge from '../Assets/badge128.png'
import CardProduct from './CardProduct'

function ValueCompany() {
  return (
    <div className="desktop3:mx-[10%] desktop2:mx-[5%] desktop:mx-[5%]  phone:mx-[5%] tablet:mx-[5%] laptop:mx-[5%] ">
      <div className="grid desktop3:grid-cols-4 desktop2:grid-cols-4 desktop:grid-cols-4 phone:grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-2 py-[1rem] ">
        <CardProduct img={badge} cardBg={true} position={'last'} judul={'Quality Control'} desc={'Every product is controlled to maintain the consistency of highquality products.'} />
        <CardProduct img={interview} judul={'Free Consultation'} desc={' For any of your needs, we will always assist you'} />
        <CardProduct img={handlewith} cardBg={true} judul={'Handling Complaint'} desc={'You will be assisted of any inconveniences.'} />
        <CardProduct img={product} judul={'Free Sample'} position={'first'} desc={'We are willing to send you free sample to assure our quality'} />
      </div>
    </div>
  )
}

export default ValueCompany
