import React from 'react'
import GenresList from '../constant/GenresList'
import MovieList from './MovieList'

function MovieByGenere() {
  return (
    <div>
        {GenresList.genere.map((item, index)=>index<=10&&(
            <div className='p-8 px-8 md:px-16'>
                <h2 className='font-bold text-[20px]'>{item.name}</h2>
                <MovieList genreId={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}

export default MovieByGenere