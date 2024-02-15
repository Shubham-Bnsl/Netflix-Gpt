import React, { useState } from 'react'
import Header from './header'

const Login = () => {

  const [isSignIn,setSignIn] = useState(true)
  const togglebutton =()=>{
    setSignIn(!isSignIn)
  }

  return (
    <div>
      <Header />

      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      </div>
        
            <form className=' text-white bg-black p-12 absolute w-3/12  my-36 left-0 mx-auto right-0 bg-opacity-80  '>
                <h1 className='py-4 text-2xl font-semibold '>{isSignIn?"Sign in":"Sign up"}</h1>
                {!isSignIn && <input className='p-4 my-4 w-full bg-gray-600 text-black' type="text" placeholder='Name' />}
                <input className='p-4 my-4  w-full  bg-gray-700 text-black' type="text" placeholder='Email-address'  />
                <input className='p-4 my-4 w-full  bg-gray-700 text-black' type="text" placeholder='Password' />
                <button className='p-4 my-6 w-full rounded bg-red-600 '>Submit</button>
                <div className='py-4 cursor-pointer' onClick={togglebutton}>{isSignIn?"New to Netflix? Signup Now":"already registered? Signin Now"}</div>
            </form>
        
    </div>
  )
}

export default Login
Login