import React from 'react'
import GptSearchBar from './gptSearchBar'
import GptMovieSuggestion from './gptMovieSuggestion'
import { BackgroundIMG_URL } from '../utils/constants'

const gptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'> 
        <img className='h-screen object-cover md:object-cover md:h-auto  ' src={BackgroundIMG_URL} alt="Image" />
      </div>
      <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestion/>
      </div>
    </>
      
  )
}

export default gptSearch;