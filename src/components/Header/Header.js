import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateProfile } from '../../services/loginService'
import { readUserData, updateUserData } from '../../utils/localStorageHelper'
import { updateProfile as updateProfileSlice } from './../../utils/userSlice';
import Button from '../Button/Button'
import FullName from '../FullName/FullName'
import './header.css'

function Header({firstName = '', lastName = ''}) {
    const [editForm, setEditForm] = useState(false);
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user)

    console.log(userState);
    
    const handleShowEditForm = () => {
        setEditForm(editForm => !editForm)
    }

    const handleCancelEdit = () => {
        setEditForm(false)
    }

    const handleUpdateFullName = () => {
        const token = readUserData().jwt;
        const userProfileData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value
        };

        updateProfile(userProfileData, token)
        .then(response => {
            if(response.status === 200) {
                //update the localStorage with new data
                updateUserData({
                    jwt: token,
                    authenticated: true,
                    user: {
                        firstName: userProfileData.firstName,
                        lastName: userProfileData.lastName,
                        email: userState.user.email,
                        id: userState.user.id
                    }
                });

                //dispatch updateProfile action
                dispatch(updateProfileSlice(userProfileData));

                //hide the edit form
                setEditForm(false);
            }else{
                //show error page
                navigate('/error');
            }
        })
        .catch(err => {
            //show error page
            navigate('/error');
        })
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
                                <Button text='Save' classname='' onclick={handleUpdateFullName}/>
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