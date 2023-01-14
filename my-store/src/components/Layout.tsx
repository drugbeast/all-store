import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { logo, cart, courseLogo, githubIcon } from '../images'

function Layout () {
  return (
    <div className="flex flex-col min-h-screen font-montserrat">
        <header>
          <div className="container px-20 pt-5 flex justify-between">
            <NavLink className="flex gap-5 items-center" to="/" end={true}>
              <img src={logo} alt="logo" className="w-[45px]"></img>
              <h1 className="text-4xl font-bold text-indigo-400 italic">All Store</h1>
            </NavLink>
            <div className="flex gap-3">
              <div className="flex flex-col">
                <span className="font-medium text-indigo-400">Cart total: 0.00$</span>
                <span className="font-medium text-indigo-400">Cart Amount: 0</span>
              </div>
              <NavLink to="/cart" end={true}>
                <img src={cart} alt="cart" className="w-[45px]"></img>
              </NavLink>
            </div>
          </div>
        </header>
        <main className="flex-[1_0_auto]">
          <Outlet />
        </main>
        <footer className="flex-[0_0_auto] pb-5">
          <div className="container justify-center flex gap-5 items-center">
            <a href="https://github.com/drugbeast"><img src={githubIcon} alt="githubIcon" className="w-[35px]"></img></a>
            <a href="https://rs.school/js/"><img src={courseLogo} alt="courseLogo" className="w-[80px]"></img></a>
            <span className='text-indigo-400 font-semibold'>2022-2023</span>
          </div>
        </footer>
    </div>
  )
}

export default Layout
