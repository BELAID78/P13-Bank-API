import { useContext } from 'react';
import SignForm from "../components/SignForm/SignForm"
import { UserLoginContext } from '../App';

function Sign() {

    const {isLoggedIn, setIsLoggedIn} = useContext(UserLoginContext);

    setIsLoggedIn(false);

    return (
        <main className="main bg-dark">
            <SignForm />
        </main>
    )
}

export default Sign