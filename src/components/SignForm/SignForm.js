import CheckBoxInput from '../CheckBoxInput/CheckBoxInput'
import SignFormHeader from '../SignFormHeader/SignFormHeader'
import SubmitButton from '../SubmitButton/SubmitButton'
import TextInput from '../TextInput/TextInput'
import './signForm.css'

function SignForm() {
    return (
        <section className="sign-in-content">

            <SignFormHeader />

            <form>
                <TextInput id='username' labelText='Username' />

                <TextInput id='password' labelText='Password' />

                <CheckBoxInput id='remember-me' labelText='Remember me' />

                <SubmitButton link='/user' text='Sign In' />
            </form>
        </section>
    )
}

export default SignForm