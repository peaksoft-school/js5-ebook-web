import { EBOOK_AUTH_INFO } from '../utils/constants/constants'

function saveToLocaleStorage(authInfo) {
   return localStorage.setItem(EBOOK_AUTH_INFO, JSON.stringify(authInfo))
}

export default saveToLocaleStorage
