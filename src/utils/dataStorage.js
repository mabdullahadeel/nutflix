
export function saveToSessionStorage(data, dataName) {
    sessionStorage.setItem(dataName, JSON.stringify(data))
};

export function getFromSessionStorage(dataName) {
    const userData = sessionStorage.getItem(dataName);
    if (userData) {
        return JSON.parse(userData)
    } else {
        return null;
    }
}