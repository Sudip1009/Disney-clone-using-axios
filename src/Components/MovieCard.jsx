import React from 'react'
const imageBaseUrl = "https://image.tmdb.org/t/p/original"
function MovieCard({item}) {

  return (
    <>
        <img className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 
        transition-all duration-150 ease-in cursor-pointer' src={imageBaseUrl+item.poster_path} alt="" />
    </>
  )
}

export default MovieCard