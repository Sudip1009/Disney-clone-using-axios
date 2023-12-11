import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSearch , FaPlus ,FaStar ,FaUserCircle  } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { HiDotsVertical } from "react-icons/hi";


export const Navber = () => {
  const [toggle , setToggle] = useState(false)
  return ( 
    <>
    <div className='flex justify-between p-5'>
    <div className='flex gap-8'>
    <h1  className='sm:text-xl md:text-1.5xl lg:text-2xl font-bold italic p-2'>Disney+</h1>
    <div className='hidden md:flex items-center gap-8'>
      <div className='flex items-center gap-3'><IoMdHome/><a className='text-[18px] font-semibold italic hover:underline underline-offset-8' href="">Home</a></div>
      <div className='flex items-center gap-3'><FaSearch/><a className='text-[18px] font-semibold italic hover:underline underline-offset-8' href="">Search</a></div>
      <div className='flex items-center gap-3'><FaPlus/><a className='text-[18px] font-semibold italic hover:underline underline-offset-8' href="">Watchlist</a></div>
      <div className='flex items-center gap-3'><FaStar/><a className='text-[18px] font-semibold italic hover:underline underline-offset-8' href="">Originals</a></div>
      <div className='flex items-center gap-3'><RiMovie2Fill/><a className='text-[18px] font-semibold italic hover:underline underline-offset-8' href="">Movies</a></div>
      <div className='flex items-center gap-3'><PiTelevisionFill/><a className='text-[18px] font-semibold italic hover:underline underline-offset-8' href="">Series</a></div>
    </div>
    <div className='flex md:hidden items-center gap-5'>
      <div className='flex items-center gap-3'><IoMdHome/><a className='text-[18px] font-semibold italic hover:underline underline-offset-8 hidden md:block' href="">Home</a></div>
      <div className='flex items-center gap-3'><FaSearch/><a className='text-[18px] font-semibold italic hover:underline underline-offset-8 hidden md:block' href="">Search</a></div>
      <div className='flex items-center gap-3'><FaPlus/><a className='text-[18px] font-semibold italic hover:underline underline-offset-8 hidden md:block' href="">Watchlist</a></div>
      <div><HiDotsVertical  onClick={()=> setToggle(!toggle)} className='cursor-pointer'/>
      {toggle ? <div className='absolute mt-3 bg-black border-[1px] border-gray-700 p-3 px-5 py-4'>
      <div className='flex items-center gap-3'><FaStar/><a className='text-[16px] font-semibold italic hover:underline underline-offset-8' href="">Originals</a></div>
      <div className='flex items-center gap-3 mt-2'><RiMovie2Fill/><a className='text-[16px] font-semibold italic hover:underline underline-offset-8' href="">Movies</a></div>
      <div className='flex items-center gap-3 mt-2'><PiTelevisionFill/><a className='text-[16px] font-semibold italic hover:underline underline-offset-8' href="">Series</a></div>
      </div>: null}
      </div>
    </div>
    </div>
    <FaUserCircle className='text-4xl'/>
    </div>
    

    </>
  )
}
