import React from 'react'
// border-2 border-solid border-black
import scene from "../Assets/girl (lp).png"
export default function About() {
  return (
    <div className='lg:h-[653px] lg:pt-[182px] '>
      <div className='bg-[background: linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)] lg:h-[467px] bg-slate-100  flex items-center justify-around'>
     <img src={scene} alt="" />
     <div className='lg:w-[447px] lg:h-[254px]'>
      <h1 className='font-[600] lg:text-[45px] text-[#0E2368] '> 
        About Us
      </h1>
      <div className='lg:leading-[27px] text-[#444957]'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
      </div>
      <button className='bg-[#E23744] lg:w-[132px] lg:h-[42px] lg:rounded-[21px] lg:gap-[10px] font-[700] text-white  lg:relative top-[30px]'>Read More</button>
     </div>
    </div>
    </div>
  )
}
