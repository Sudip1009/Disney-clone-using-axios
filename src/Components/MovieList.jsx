import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HorizontalMovieCard from './HorizontalMovieCard';


function MovieList({genreId, index_}) {
    const [movies , setMovies] = useState([])
    const elementRef = useRef();
    useEffect(()=>{
        getMovies()
      },[])

    const getMovies =()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovies(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

  return (
    <div className='relative'>
        <HiChevronLeft onClick={()=>slideLeft(elementRef.current)} 
        className={`text-[50px] text-white
        p-2 z-10 cursor-pointer 
        hidden md:block absolute ${index_%3==0?'mt-[60px]':'mt-[150px]'} `}/>
    <div ref={elementRef} className='flex gap-8  pt-4 px-3 pb-4 scroll-smooth overflow-x-auto scrollbar-none'>
        {movies.map((item)=>(
        <>
        {index_%3==0?<HorizontalMovieCard item={item}/>:<MovieCard item={item} />}
         </>
        ))}
    </div>
    <HiChevronRight onClick={()=>slideRight(elementRef.current)} 
    className={`text-[50px] text-white hidden md:block
    p-2 cursor-pointer z-10 top-0
     absolute right-0 ${index_%3==0?'mt-[60px]':'mt-[150px]'}`}/>
    </div>
  )
}

export default MovieList