import './checkBoxInput.css'

function CheckBoxInput({id, labelText}) {
    return (
        <div className="input-remember">
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{labelText}</label>
        </div>
    )
}

export default CheckBoxInput