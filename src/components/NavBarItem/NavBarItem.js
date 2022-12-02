import React from 'react'
import './navBarItem.css'

function NavBarItem({link, children}) {
    return (
        <a className="main-nav-item" href={link}>
            {children}
        </a>
    )
}

export default NavBarItem