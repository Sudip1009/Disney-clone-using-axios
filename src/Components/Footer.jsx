import React from 'react'
import { FaFacebookF,FaTwitter  } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function Footer() {
  return (
    <div className='p-5 mt-3'>
        <div className='flex justify-around text-[10px] md:text-[20px] flex-wrap mb-6'>
        <div className='ml-2 mt-2 '>
            <h2>Company</h2>
            <p>About Us</p>
            <p>Careers</p>
        </div>
        <div className='ml-2 mt-4 '>
            <h2>View website in</h2>
            <div className='flex'><TiTick className='h-[15px] md:h-[30px]'/>English</div>
        </div>
        <div className='ml-2 mt-4 '>
            <h2>Need Help?</h2>
            <p>Visit help center</p>
            <p>Share feedback</p>
        </div>
        <div className='ml-2 mt-4 '>
            <h2>Connect with Us</h2>
            <div className='flex justify-between w-[50px] md:w-[100px] mt-2 text-[20px] md:text-[30px]'>
            <FaFacebookF/>
            <FaTwitter/>
            </div>
        </div>
        </div>
        <div>
            <h2>&copy; 2023 STAR. All Rights Reserve</h2>
            <span>Terms of use </span>  <span> Privacy Policy</span>  <span> Faq</span>
        </div>
    </div>
  )
}

export default Footer