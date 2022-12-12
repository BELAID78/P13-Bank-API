import { useState } from 'react'

import CheckBoxInput from '../CheckBoxInput/CheckBoxInput'
import SignFormHeader from '../SignFormHeader/SignFormHeader'
import SubmitButton from '../SubmitButton/SubmitButton'
import TextInput from '../TextInput/TextInput'

import loginService from '../../services/loginService'

import './signForm.css'
import { updateUserData } from '../../utils/localStorageHelper'
import { useDispatch } from 'react-redux'
import { insertJWT } from '../../utils/userSlice'
import { useNavigate } from 'react-router-dom'

function SignForm() {
    const [email, setEmail] = useState('');

    const [userError, setUserError] = useState('');

    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        const credentials = {
            email: email,
            password: password
        }

        loginService(credentials).then(data => {

            if(data.status === 500) {
                //redirect to error page
                navigate('/error');

                //empty the error message
                setUserError('');
            }else if(data.status === 400) {
                //Error: Error in login user
                setUserError(data.message);

            }else{
                //empty the error message
                setUserError('');

                //set token in local storage
                updateUserData({
                    authenticated: true,
                    user: {},
                    jwt: data.body.token
                });

                //set token in state
                dispatch(insertJWT(data.body.token));

                //redirect to user page
                navigate('/user');
            }

        }).catch(err => {
            //empty the error message
            setUserError('');

            //redirect to error page
            navigate('/error');
        })
    }

    return (
        <section className="sign-in-content">

            <SignFormHeader />

            <form>

                {
                    userError !== '' && <p className='error-message'>{userError}</p>
                }

                <TextInput onchange={handleEmailChange} value={email} id='username' labelText='Username' />

                <TextInput type='password' onchange={handlePasswordChange} value={password} id='password' labelText='Password' />

                <CheckBoxInput id='remember-me' labelText='Remember me' />

                <SubmitButton link='/#' text='Sign In' onclick={handleFormSubmit}/>
            </form>
        </section>
    )
}

export default SignForm