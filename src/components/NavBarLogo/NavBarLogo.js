import argentBankLogo from './../../assets/images/argentBankLogo.png'
import './navBarLogo.css'

function NavBarLogo() {
    return (
        <a className="main-nav-logo" href="/">
            <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
    )
}

export default NavBarLogo