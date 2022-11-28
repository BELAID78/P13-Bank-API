/**
 * attempt login with credentials
 * 
 * @param {object} credentials 
 * @param {string} credentials.email
 * @param {string} credentials.password
 * @returns {Promise}
 */
 const loginService = async (credentials) => {

    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });

    const data = await response.json();

    return data;
}

export default loginService