import React from 'react'
import {NavLink, Outlet } from 'react-router-dom'

const Company = () => {
  return (
    <>
      <h2>Company</h2>
      <ul className='nav'>
      <NavLink className='nav-link' to='admin'>Admin</NavLink>
      <NavLink className='nav-link' to='faculty'>Faculty</NavLink>
      <NavLink className='nav-link' to='students'>Students</NavLink>
      </ul>
      <Outlet />
    </>
  )
}

export default Company
