import './button.css'

function Button({text, classname, onclick = () => {}, type = 'button'}) {
    return (
        <button type={type} className={classname} onClick={onclick}>{text}</button>
    )
}

export default Button