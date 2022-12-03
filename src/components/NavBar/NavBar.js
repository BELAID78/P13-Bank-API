import { faRightFromBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NavBarItem from '../NavBarItem/NavBarItem'
import NavBarLogo from '../NavBarLogo/NavBarLogo'
import './navbar.css'

function NavBar({isLoggedIn}) {
    return (
        <nav className="main-nav">
            <NavBarLogo />
            <div>
                {
                    !isLoggedIn && <NavBarItem link='/sign'>
                        <FontAwesomeIcon icon={faUserCircle} />
                        Sign In
                    </NavBarItem>
                }
                {
                    isLoggedIn && <>
                        <NavBarItem link='/user'>
                            <FontAwesomeIcon icon={faUserCircle} />
                            Tony
                        </NavBarItem>

                        <NavBarItem link='/'>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            Sign Out
                        </NavBarItem>
                    </>
                }
            </div>
        </nav>
    )
}

export default NavBar