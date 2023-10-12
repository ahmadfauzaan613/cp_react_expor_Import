import React from 'react'
import CardTeam from './CardTeam'
import face2 from '../Assets/WhatsApp Image 2023-10-10 at 11.34.23_c19dce48.jpg'
import face1 from '../Assets/WhatsApp Image 2023-10-10 at 11.43.28_8f8006ae.jpg'
function Team() {
  return (
    <div className="desktop3:mx-[10%] desktop3:mt-[5rem] desktop2:mt-[5rem] desktop:mt-[5rem]  desktop3:pb-3 phone:px-[5%]  tablet:px-[5%] laptop:px-[5%] desktop:px-[5%] desktop2:px-[5%]" id="team">
      <div className="tablet:mt-8 laptop:mt-8  desktop:hidden  desktop2:hidden  desktop3:hidden phone:hidden">
        <p className="desktop3:text-[40px] font-bold phone:mb-[2rem] phone:text-[24px] phone:text-center tablet:mb-[2rem] tablet:text-[28px] tablet:text-center laptop:mb-[2rem] laptop:text-[28px] laptop:text-center">
          Meet Our <br className="phone:hidden tablet:hidden laptop:hidden" /> Core Team
        </p>
      </div>
      <div className="desktop3:flex desktop3:items-center desktop3:justify-around desktop:flex desktop:items-center desktop:justify-around desktop2:flex desktop2:items-center desktop2:justify-around mt-8 gap-5  tablet:grid tablet:grid-cols-2 laptop:grid laptop:grid-cols-2">
        <div className="tablet:hidden laptop:hidden">
          <p className="desktop3:text-[40px] desktop:text-[35px] desktop2:text-[35px] font-bold phone:mb-[2rem] phone:text-[24px] phone:text-center tablet:mb-[2rem] tablet:text-[28px] tablet:text-center laptop:mb-[2rem] laptop:text-[28px] laptop:text-center">
            Meet Our <br className="phone:hidden tablet:hidden laptop:hidden" /> Core Team
          </p>
        </div>
        <CardTeam img={face2} name={'Angga Utama'} position={'Presiden Director'} />
        <CardTeam img={face1} name={'Nani wati'} position={'CEO faunder'} />
      </div>
    </div>
  )
}

export default Team
