import React from 'react'
const imageBaseUrl = "https://image.tmdb.org/t/p/original"
function HorizontalMovieCard({item}) {

  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
        <img className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 
        transition-all duration-150 ease-in cursor-pointer' src={imageBaseUrl+item.backdrop_path} alt="" />
        <h2 className='w-[110px] md:w-[260px] mt-2 hover:underline cursor-pointer'>{item.title}</h2>
    </section>
  )
}

export default HorizontalMovieCard