import { faRightFromBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUserData } from '../../utils/localStorageHelper'
import { logout } from '../../utils/userSlice'
import NavBarItem from '../NavBarItem/NavBarItem'
import NavBarLogo from '../NavBarLogo/NavBarLogo'
import './navbar.css'

function NavBar({isLoggedIn}) {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault()

        dispatch(logout());

        removeUserData();

        navigate('/');
    }

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

                        <NavBarItem link='#' onclick={handleLogout}>
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