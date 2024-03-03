import React from 'react'
import GptSearchBar from './gptSearchBar'
import GptMovieSuggestion from './gptMovieSuggestion'
import { BackgroundIMG_URL } from '../utils/constants'

const gptSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img src={BackgroundIMG_URL} alt="Image" />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
      
  )
}

export default gptSearch;