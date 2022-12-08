import React, { useRef, useState } from 'react'
import Button from '../Button/Button'
import FullName from '../FullName/FullName'
import './header.css'

function Header({firstName = '', lastName = ''}) {
    const [editForm, setEditForm] = useState(false)
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const handleShowEditForm = () => {
        setEditForm(editForm => !editForm)
    }

    const handleCancelEdit = () => {
        setEditForm(false)
    }

    return (
        <div className="header">
            <h1>
                Welcome back
                <br />
                {
                    !editForm && <FullName userFullName={{firstName, lastName}} />
                }

                {
                    editForm && 
                    <div>
                        <form>
                            <div className='full-name-edit-container'>
                                <input ref={firstNameRef} type="text" placeholder={firstName} />
                                <input ref={lastNameRef} type="text" placeholder={lastName} />
                            </div>

                            <div className='full-name-edit-buttons'>
                                <Button text='Save' classname='' />
                                <Button text='Cancel' classname='' onclick={handleCancelEdit}/>
                            </div>
                        </form>
                    </div>
                }
            </h1>

            {
                !editForm && <Button text='Edit Name' classname='edit-button' onclick={handleShowEditForm} />
            }
        </div>
    )
}

export default Header