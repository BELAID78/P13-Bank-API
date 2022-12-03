import React from 'react'
import { NavLink } from 'react-router-dom'
import './navBarItem.css'

function NavBarItem({link, children, onclick = () => {}}) {
    return (
        <NavLink to={link} className='main-nav-item' onClick={onclick}>
            {children}
        </NavLink>
    )
}

export default NavBarItem