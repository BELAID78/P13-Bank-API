import { Link } from 'react-router-dom'
import argentBankLogo from './../../assets/images/argentBankLogo.png'
import './navBarLogo.css'

function NavBarLogo() {

    return (
        <Link to='/' className='main-nav-logo'>
            <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
    )
}

export default NavBarLogo