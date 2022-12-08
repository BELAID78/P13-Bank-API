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

/**
 * update user profile data
 * 
 * @param {object} profile 
 * @param {string} token 
 * @returns {Promise}
 */
export const updateProfile = async (profile, token) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'put',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify(profile)
    });

    const data = await response.json();

    return data;
}

/**
 * read user profile 
 * 
 * @param {string} token 
 * @returns {Promise}
 */
export const readProfile = async (token) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'post',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify(token)
    });

    const data = await response.json();

    return data;
}

export default loginService