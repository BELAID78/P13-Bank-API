import './textInput.css'

function TextInput({id, type = 'text', labelText, value, onchange}) {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{labelText}</label>
            <input type={type} id={id} value={value} onChange={onchange} />
        </div>
    )
}

export default TextInput