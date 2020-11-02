
export function saveToSessionStorage(data, dataName) {
    sessionStorage.setItem(dataName, JSON.stringify(data))
};

export function getFromSessionStorage(dataName) {
    const userData = sessionStorage.getItem(dataName);
    return JSON.parse(userData)
}