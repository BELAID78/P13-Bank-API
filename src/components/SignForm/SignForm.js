import { useState } from 'react'
import CheckBoxInput from '../CheckBoxInput/CheckBoxInput'
import SignFormHeader from '../SignFormHeader/SignFormHeader'
import SubmitButton from '../SubmitButton/SubmitButton'
import TextInput from '../TextInput/TextInput'
import './signForm.css'

function SignForm() {
    const [userName, setUserName] = useState('');

    const [password, setPassword] = useState('');

    const handleUserNameChange = e => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        console.table([userName,password])
    }

    return (
        <section className="sign-in-content">

            <SignFormHeader />

            <form>
                <TextInput onchange={handleUserNameChange} value={userName} id='username' labelText='Username' />

                <TextInput onchange={handlePasswordChange} value={password} id='password' labelText='Password' />

                <CheckBoxInput id='remember-me' labelText='Remember me' />

                <SubmitButton link='/#' text='Sign In' onclick={handleFormSubmit}/>
            </form>
        </section>
    )
}

export default SignForm