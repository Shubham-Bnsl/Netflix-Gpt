import React from 'react'
import NetflixLogo from "../Netflix_Logo.png" 
const header = () => {
  return (
      <img className='z-10 px-8 py-2 w-44 absolute bg-black bg-opacity-80' src={NetflixLogo} alt="logo" />
  )
}

export default header
