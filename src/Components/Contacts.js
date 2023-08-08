import React from 'react'
import truck2 from "../Assets/Screenshot_669 2.png";
import { BsInstagram,BsTwitter,BsFacebook } from 'react-icons/bs';

export default function Contacts() {
  return (
    <div className='bg-[#F8F8F8] lg:h-[362px] lg:flex  items-center'>
     <div className='lg:h-[202px] lg:w-[100%] flex justify-around items-center'>
     <img src={truck2} alt="" className=' lg:w-[161px] lg:h-[125px]'  />
      <div className='lg:h-[186px] lg:w-[232px]'>
        <h1 className='lg:text-[18.84px] lg:font-[600] lg:leading-[27px]  text-[#0E2368] lg:mb-[10px] '>
        Conatct Us
        </h1>
        <div className='lg:h-[145px] lg:w-[232px] lg:text-[14.66px] lg:leading-[23.03px] text-[#646874]'>
        Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
        <div className='my-[10px]'>
        example2020@gmail.com
        </div>
        <div>
        (904) 443-0343
        </div>
        </div>
      
        
      </div>
      <div className='lg:h-[186px] lg:w-[438px] flex justify-between'>
      <div>
      <h1 className='lg:text-[18.84px] lg:font-[600] lg:leading-[27px]  text-[#0E2368] lg:mb-[10px]'>
        More
      </h1>
      <div className=' lg:w-[153px] mt-[25px]  '>
        <ul className='text-[#646874]  '>
          <li className='lg:leading-[27px]'>About</li>
          <li className='lg:leading-[27px]'>Products</li>
          <li className='lg:leading-[27px]'>Career</li>
          <li className='lg:leading-[27px]'>Contact Us</li>
        </ul>
      </div>
      </div>
      <div className='mr-[12px]'>
        <h1 className='lg:text-[18.84px] lg:font-[600] lg:leading-[27px]  text-[#0E2368] lg:mb-[10px]'>
          Social Links
        </h1>
        <div className='flex justify-between '>
        <div className='lg:h-[69px] lg:w-[69px] text-[#0E2368]' >
        <BsInstagram className='lg:h-[21px] lg:w-[21px] text-[#0E2368]'/>
        </div>
       <div  className='lg:h-[69px] lg:w-[69px] text-[#0E2368]' >
       <BsTwitter className='lg:h-[21px] lg:w-[21px] text-[#0E2368]'/>
       </div>
         <div  className='lg:h-[69px] lg:w-[69px] text-[#0E2368]' >
         <BsFacebook className='lg:h-[21px] lg:w-[21px] text-[#0E2368]'/>
         </div>
        </div>
        <div className='text-[#828B9C] lg:text-[14.66px] font-[400]'>
        © 2022 Food Truck Example
        </div>
      </div>
      </div>
     </div>
    </div>
  )
}
