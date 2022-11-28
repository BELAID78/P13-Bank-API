/**
 * read user data from localStorage
 * 
 * @returns {object}
 */
 export const readUserData = () => {
    const data = localStorage.getItem('user-data');

    return JSON.parse(data)
}