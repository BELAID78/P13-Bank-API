import './textInput.css'

function TextInput({id, labelText}) {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{labelText}</label>
            <input type="text" id={id} />
        </div>
    )
}

export default TextInput