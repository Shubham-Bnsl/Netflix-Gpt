import React from 'react'
import PlayIcon from '@mui/icons-material/PlayArrow';

const videoTitle = ({title, overview}) => {
  return (
    <div className='px-16 pt-56 absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
      <h1 className='font-bold text-5xl'>{title}</h1>
      <p className='py-6 w-1/3 text-lg'>{overview}</p>
      <div className=''>
          <button className='bg-white text-black font-medium p-4 px-10 text-xl rounded-lg hover:bg-opacity-80 '> <PlayIcon/>Play Now</button>
          <button className='bg-gray-500 text-white font-medium p-4 px-10 mx-2 text-xl bg-opacity-50 rounded-lg '>More Info</button>
      </div>
    </div>
  )
}

export default videoTitle
