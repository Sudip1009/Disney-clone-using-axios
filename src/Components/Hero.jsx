import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const imageBaseUrl = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth;

//pass-dip1009@1009
//Dip1009

function Hero() {
  const [movieList , setMovieList] = useState([])
  const elementRef = useRef();
  useEffect(()=>{
    getTrendingMovies()
  },[])

  const getTrendingMovies =()=>{
    GlobalApi.getTrendingVideos.then(resp=>{
      // console.log(resp.data.results)
      setMovieList(resp.data.results)
    })
  }
  const sliderRight =(element)=>{
        element.scrollLeft += screenWidth-110
  }
  const sliderLeft =(element)=>{
        element.scrollLeft -= screenWidth-110
  }
  return (
    <div>
      <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} className='hidden md:block text-white text-[40px] absolute mx-8 mt-[170px]'/>
      <HiChevronRight onClick={()=>sliderRight(elementRef.current)} className='hidden md:block text-white text-[40px] absolute mx-8 mt-[170px] right-0'/>

    <div className='flex w-full overflow-x-auto px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
      {movieList.map((item , index)=>(
          <img src={imageBaseUrl+item.backdrop_path} className='min-w-full md:h-[350px] object-cover mr-5 object-left-top roundd-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' alt="" />
      ))}
    </div>
    </div>
  )
}

export default Hero