import React from 'react'
import { useSelector } from 'react-redux'
 import MovieList from "./movieLists"
const gptMovieSuggestion = () => {
  const {movieNames, movieResults} = useSelector((store) => store.gpt)
  if(!movieNames){
    return null
  }


  return (
    <div className='p-4 m-4 bg-black text-white opacity-90' >
        {  movieNames.map((movieName, index) =>(<MovieList key={movieName[index]} title={movieName} movies={movieResults[index]} />))}
    </div>
  )
}

export default gptMovieSuggestion
