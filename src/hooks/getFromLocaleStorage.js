import { EBOOK_AUTH_INFO } from '../utils/constants/constants'

function getFromLocaleStorage() {
   return JSON.parse(localStorage.getItem(EBOOK_AUTH_INFO))
}

export default getFromLocaleStorage
