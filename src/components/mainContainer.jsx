import React from 'react'
import VideoBackground from './videoBackground'
import VideoTitle from './videoTitle'
import { useSelector } from 'react-redux'

const mainContainer = () => {

  const movie = useSelector((store) => store.movies?.nowPlayingMovies)
  if(!movie) return
  const  mainMovies =  movie[0];
    const {original_title, overview, id} = mainMovies
    
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default mainContainer
