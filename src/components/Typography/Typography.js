import React from 'react'

function Typography({classname, text}) {
    return (
        <p className={classname}>
            {text}
        </p>
    )
}

export default Typography