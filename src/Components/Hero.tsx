import React from 'react'
import Api from '../Services/Api'


const Hero = () => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
    const [movieList, setMovieList] = React.useState<any>([])
    const getPopular = () => {
        // is this the right way
        Api.getPopularMovies.then((res) => {
            setMovieList(res.data.results[0])
        }).catch((err) => {
            console.log(err)
        })
    }
    React.useEffect(() => {
        getPopular()
    }, [])
  return (
    <div>
        <div className='absolute h-[85vh] bg-gradient-to-t from-[#1e2126] via-transparent to-transparent w-full'></div>
        <div  className = 'absolute mt-[400px] md:mt-[340px] px-10 md:px-24 ' >
            <h2 className = 'text-white text-[19px] lg:text-[27px]' >
                Watch only on YULU
            </h2>
            <h2 className = 'text-white text-[36px] lg:text-[47px] font-bold'> {movieList.original_title}</h2>
            <div className = 'flex gap-5 mt-5' >
                <button>PLAY</button>
                <button className = 'bg-transparent border-2 border-white text-white cursor-pointer hover:border-gray-500 ' >DETAILS</button>

            </div>
        </div>
        <img  src = {IMAGE_BASE_URL + movieList.backdrop_path} width={1920} height={1080} 
            className='h-[85vh] object-cover' alt= {movieList.original_title}
        />
    </div>
  )
}

export default Hero