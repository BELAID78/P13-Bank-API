import React from 'react'
import { NavLink } from 'react-router-dom'
import './navBarItem.css'

function NavBarItem({link, children}) {
    return (
        <NavLink to={link} className='main-nav-item' >
            {children}
        </NavLink>
    )
}

export default NavBarItem