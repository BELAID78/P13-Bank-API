import React from 'react'
import Button from '../Button/Button'
import FullName from '../FullName/FullName'
import './header.css'

function Header({firstName, lastName}) {
    return (
        <div className="header">
            <h1>
                Welcome back
                <br />
                <FullName userFullName={{firstName, lastName}} />!
            </h1>

            <Button text='Edit Name' classname='edit-button' />
        </div>
    )
}

export default Header