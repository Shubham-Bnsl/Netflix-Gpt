import React from 'react'
import Header from './header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browser from './Browser'



const body = () => {
const router =  createBrowserRouter ([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browser",
            element:<Browser />
        },
]);

  return (
    <div>
      <RouterProvider router={router} /> 
    </div>
  )
}

export default body
