import React from 'react'
import shipping from '../Assets/c1.png'
import payment from '../Assets/c2.png'
import Lading from '../Assets/c3.png'
import CardCompany from './CardCompany'
function CompanyTerm() {
  return (
    <div>
      <div className="desktop3:mx-[10%] desktop3:mt-[3rem] desktop3:pb-3 phone:px-[5%]  tablet:px-[5%] laptop:px-[5%] desktop:px-[5%] desktop2:px-[5%] phone:mt-5 tablet:mt-5 laptop:mt-5">
        <p className="desktop3:text-[42px] desktop2:text-[36px] desktop:text-[30px] text-[#2B78BB] phone:text-center phone:text-[30px] phone:pb-3 tablet:text-center tablet:text-[30px] tablet:pb-3 laptop:text-center laptop:text-[30px] laptop:pb-3">Company Terms</p>
        <div className="grid desktop3:grid-cols-3 desktop3:mt-8 desktop3:gap-5 desktop:grid-cols-3 desktop:mt-8 desktop:gap-5 desktop2:grid-cols-3 desktop2:mt-8 desktop2:gap-5 phone:space-y-4 tablet:space-y-4 laptop:space-y-4 phone:py-4 tablet:py-4 laptop:py-4">
          <CardCompany img={shipping} title={'SHIPPING TERMS'} type={'shipping'} />
          <CardCompany img={payment} title={'PAYMENT TERMS'} type={'payment'} />
          <CardCompany img={Lading} title={'PORT OF LADING'} type={'lading'} />
        </div>
      </div>
    </div>
  )
}

export default CompanyTerm
