import './submitButton.css'

function SubmitButton({link, text, onclick}) {
    return (
        <a href={link} onClick={onclick} className="sign-in-button">{text}</a> 
    )
}

export default SubmitButton