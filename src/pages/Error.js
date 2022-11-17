import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import './../assets/css/layout/_error.css';

function Error() {
    return (
        <div className="main">
            <p className="error-code"><FontAwesomeIcon icon={faRobot} /><br /> ERROR <span>404 </span></p>
            <p className="error-description">Sorry! this page isn't avaliable.</p>
            <p className="redirect">click  <a href="/">here</a> to go to the home page</p>
        </div>
    )
}

export default Error