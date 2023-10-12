import React from 'react'
import ProductionItem from './ProductionItem'
import content5 from '../Assets/bawang.png'
import icon8 from '../Assets/icon_8.png'
import kunyit from '../Assets/pngegg.png'
function Product() {
  return (
    <div className="desktop3:mx-[10%] desktop3:mt-[5rem] desktop3:pb-[2rem] desktop2:mx-[5%] desktop2:mt-[5rem] desktop2:pb-[2rem] desktop:mx-[5%] desktop:mt-[5rem] desktop:pb-[2rem] phone:px-[5%] phone:mt-[1rem] tablet:px-[5%] tablet:mt-[1rem] laptop:px-[5%] laptop:mt-[2rem]" id="product">
      <p className="desktop3:text-[42px] desktop2:text-[36px] desktop:text-[30px] text-[#AA941E] phone:text-center phone:text-[30px] phone:pb-3 tablet:text-center tablet:text-[30px] tablet:pb-3 laptop:text-center laptop:text-[30px] laptop:pb-3">Product</p>
      <div className="grid desktop3:grid-cols-3 desktop3:gap-5 desktop3:mt-[2rem] desktop2:grid-cols-3 desktop2:gap-5 desktop2:mt-[2rem] desktop:grid-cols-3 desktop:gap-5 desktop:mt-[2rem] laptop:grid-cols-1 laptop:gap-3 laptop:mt-[1rem] laptop:pb-2 phone:gap-2 phone:pb-3  tablet:gap-2 tablet:pb-3">
        <ProductionItem title={'Shallots'} click={'/Article-2'} code={'Hs Code 070310'} desc={'It is round not oval, and bright red in color.'} image={content5} />
        <ProductionItem title={'Cinnamon'} click={'/Article'} code={'Hs Code 0906'} desc={'Cinammon roll, Cutting 8cm, grade A, dry, fragrant and spicy.'} image={icon8} />
        <ProductionItem title={'Turmeric'} click={'/Article-3'} code={'Hs Code 0910.30.00'} desc={'Including terna plants, pseudo-stemmed, can reach 100 cm in height.'} image={kunyit} />
      </div>
    </div>
  )
}

export default Product
