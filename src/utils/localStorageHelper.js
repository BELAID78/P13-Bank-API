/**
 * read user data from localStorage
 * 
 * @returns {object}
 */
 export const readUserData = () => {
    const data = localStorage.getItem('user-data');

    return JSON.parse(data)
}

/**
 * update user data in localStorage
 * 
 * @param {object} data 
 * @returns {void}
 */
export const updateUserData = data => {
    const serializeData = JSON.stringify(data)

    localStorage.setItem('user-data', serializeData)
}

/**
 * remove user data from localStorage
 * 
 * @returns {void}
 */
export const removeUserData = () => {
    localStorage.removeItem('user-data');
}