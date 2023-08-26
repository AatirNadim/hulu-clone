import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import GenreMovieList from '../Components/GenreMovieList'

const Home = () => {
  return (
    <div >
    <Header />

    <Hero />

    <GenreMovieList />
    </div>
  )
}

export default Home