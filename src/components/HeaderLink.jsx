import React from 'react'
import {  NavLink } from 'react-router-dom'


const HeaderLink = ({ namE,href }) => {
  return (
    <NavLink to={href} className="text-sm font-semibold leading-6 hover:underline">
        {namE}
    </NavLink>
  )
}

export default HeaderLink