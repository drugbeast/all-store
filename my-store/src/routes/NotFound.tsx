import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound () {
  return (
    <div className="flex justify-center items-center flex-col pt-[15%]">
        <h1 className="text-indigo-400 text-6xl font-bold">404</h1>
        <h1 className="text-indigo-400 text-4xl font-medium">Page not found!</h1>
        <NavLink to="/" className="text-indigo-400 text-2xl font-normal pt-10 underline">
            Redirect to Main
        </NavLink>
    </div>
  )
}

export default NotFound
