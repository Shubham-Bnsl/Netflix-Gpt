import React from 'react'
import { IMG_URL } from '../utils/constants'

const movieCard = ({posterpath}) => {
  if(!posterpath) return null
  return (
    <div>
        <div className='w-44 pr-4 relative'>
            <img src={IMG_URL+posterpath} alt="Poster-Image" />
            
        </div>
    </div>
  )
}

export default movieCard
