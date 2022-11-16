import './button.css'

function Button({text, classname}) {
    return (
        <button className={classname}>{text}</button>
    )
}

export default Button