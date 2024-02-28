import React from 'react'
import MovieLists from './movieLists'
import { useSelector } from 'react-redux'

const secondaryConatiner = () => {
  const movies = useSelector((store) => store.movies)
  console.log(movies)
  return (
    movies.nowPlayingMovies && <div className='bg-black ' >
     <div className='-mt-40 px-12 relative z-20 '>
      <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieLists title={"Trending   "}   movies={movies.trendingMovies} />
      <MovieLists title={"Horror"} movies={movies.nowPlayingMovies} />
      <MovieLists title={"Popular"} movies={movies.nowPlayingMovies} />
      <MovieLists title={"Upcoming"} movies={movies.nowPlayingMovies} />
     </div>
      
      
      {/* {
        
        -MovieList - Popular
          -Movies Card * n
        -MovieList - Trending
        -MovieList - Horror
        -MovieList - NowPlaying


      } */}
    </div>
  )
}

export default secondaryConatiner
