import React from 'react'
import { IoChevronForwardSharp } from 'react-icons/io5'
import MovieList from './MovieList'

// import { genre } from '../assets/GenreList'
import GenresList from '../Constants/GenresList'


const GenreMovieList = () => {
  return (
    <div className='mt-24 p-5 px-10 md:px-20 '>
        
        {GenresList.genere.map((item:any,index)=>index<=4&&(
            <div>
            <h2 className='text-white text-[20px] font-bold '>{item.name}
            <span className='font-normal text-[16px] cursor-pointer text-gray-400
            float-right flex'>VIEW ALL <IoChevronForwardSharp className='text-white ml-1' /></span></h2>
            <MovieList genreId={item.id} />
            </div>
        ))}
       
    </div>
  )
}

export default GenreMovieList