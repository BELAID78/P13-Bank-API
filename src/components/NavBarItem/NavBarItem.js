import React from 'react'
import './navBarItem.css'

function NavBarItem({link, children}) {
    return (
        <div>
            <a className="main-nav-item" href={link}>
                {children}
            </a>
        </div>
    )
}

export default NavBarItem