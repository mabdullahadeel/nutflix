// add User Data to Local Storage
export const addToLocalStorage = (userData) => {
    localStorage.setItem('authCredientials', JSON.stringify(userData))
};
// removing User Data from Local Storage
export const removeFromLocalStorage = () => {
    localStorage.removeItem('authCredientials')
};
// getting user data from local storage
export const getUserDataFromLS = () => {
    const userData = localStorage.getItem('authCredientials');
    return JSON.parse(userData)
}