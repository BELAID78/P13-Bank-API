import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './signFormHeader.css'

function SignFormHeader() {
    return (
        <>
            <FontAwesomeIcon icon={faUserCircle} />
            <h1>Sign In</h1>
        </>
    )
}

export default SignFormHeader