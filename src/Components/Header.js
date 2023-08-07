import React from 'react'
import pizza from '../Assets/Group 292.png';
import truck from '../Assets/Screenshot_669 1.png'
// border-2 border-solid border-black
export default function Header() {
  return (
    <div className='text-slate-500 h-[804px] flex'>
    <div className="content w-[50%]">
            <img className='lg:absolute left-[100px] top-[33px]' src={truck} alt="" />
        <div className=' text-sm lg:text-[62px] lg:w-[345px] lg:h-[207px] lg:leading-[69px] lg:font-[700] lg:absolute top-[227px] left-[100px] text-[#0E2368] '>
            Discover the <span className='text-[#E23744]'>Best</span> Food and Drinks
        </div>
        <div className=' lg:w-[345px] lg:leading-[27.41px] lg:h-[55px] lg:absolute left-[100px] top-[550px] text-[#444957]'>
        Naturally made Healthcare Products for the better care & support of your body.

        </div>
        <button className='bg-[#E23744] lg:w-[190px] lg:h-[63px] lg:rounded-[34px] lg:gap-[7px] font-[700] text-white lg:absolute top-[650px] left-[97px]'>Explore Now!</button>
    </div>
    <div className="pizza  w-[50%]">
        <img src={pizza} alt="" />
    </div>
    </div>
  )
}
