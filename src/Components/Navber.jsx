import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSearch , FaPlus ,FaStar ,FaUserCircle  } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { HiDotsVertical } from "react-icons/hi";

import { IoHomeSharp } from "react-icons/io5";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdOutlineSportsBaseball } from "react-icons/md";
import  {AiOutlineClose}  from 'react-icons/ai';
import { FaWallet, FaUserFriends,FaUserAlt } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';


export const Navber = () => {
  const [nav, setNav] = useState(false)
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
    <FaUserCircle onClick={() => setNav(!nav)} className='text-4xl'/>
    </div>
          
    {nav ? <div className='bg-black/30 fixed w-9/12 h-screen z-10 top-0 right-0'></div> : ""}

<div className={nav ? 'bg-black/80 w-[300px] h-[500px] z-10 fixed right-0 top-2 duration-300' : 'bg-black/80 w-[300px] h-[500px] z-10 fixed right-[-100%] top-2 duration-300'}>

  
  <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute text-white top-4 right-4 cursor-pointer' />

  <nav>
    <ul className='flex flex-col p-4 text-white'>
      <li className='w-[100px] text-xl py-4 flex hover:underline decoration-white decoration-2 cursor-pointer'><FaUserAlt size={25} className='mr-4' />Profile</li>
      <li className='w-[100px] text-xl py-4 flex hover:underline decoration-white decoration-2 cursor-pointer'><IoHomeSharp size={25} className='mr-4' />Home</li>
      <li className='w-[120px] text-xl py-4 flex hover:underline decoration-white decoration-2 cursor-pointer'><PiTelevisionSimpleFill size={25} className='mr-4' />TV</li>
      <li className='w-[100px] text-xl py-4 flex hover:underline decoration-white decoration-2 cursor-pointer'><FaWallet size={25} className='mr-4' />Movies</li>
      <li className='w-[100px] text-xl py-4 flex hover:underline decoration-white decoration-2 cursor-pointer'><MdOutlineSportsBaseball size={25} className='mr-4' />Sports</li>
      <li className='w-[160px] text-xl py-4 flex hover:underline decoration-white decoration-2 cursor-pointer'><FaUserFriends size={25} className='mr-4' />Categories</li>
      <li className='w-[120px] text-xl py-4 flex hover:underline decoration-white decoration-2 cursor-pointer'><BiLogOut size={25} className='mr-4' />Log Out</li>
    </ul>
  </nav>
</div>

    </>
  )
}
