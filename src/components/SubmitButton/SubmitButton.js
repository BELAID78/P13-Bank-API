import './submitButton.css'

function SubmitButton({link, text}) {
    return (
        <a href={link} className="sign-in-button">{text}</a> 
    )
}

export default SubmitButton