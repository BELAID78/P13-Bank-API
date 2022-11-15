import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NavBarItem from '../NavBarItem/NavBarItem'
import NavBarLogo from '../NavBarLogo/NavBarLogo'
import './navbar.css'

function NavBar() {
    return (
        <nav className="main-nav">
            <NavBarLogo />
            <div>
                <NavBarItem link='/sign'>
                    <FontAwesomeIcon icon={faUserCircle} />
                    Sign In
                </NavBarItem>
            </div>
        </nav>
    )
}

export default NavBar