function FullName({userFullName}) {
    const {firstName, lastName} = userFullName
    return (
            <>
                {firstName} {lastName}!
            </>
    )
}

export default FullName