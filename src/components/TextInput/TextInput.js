import './textInput.css'

function TextInput({id, labelText, value, onchange}) {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{labelText}</label>
            <input type="text" id={id} value={value} onChange={onchange} />
        </div>
    )
}

export default TextInput