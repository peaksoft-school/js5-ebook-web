export function deleteFromLocaleStorage(key) {
   return localStorage.removeItem(key)
}

export function getFromLocaleStorage(key) {
   return JSON.parse(localStorage.getItem(key))
}

export function saveToLocaleStorage(key, data) {
   return localStorage.setItem(key, JSON.stringify(data))
}
