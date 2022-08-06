import { EBOOK_AUTH_INFO } from '../utils/constants/constants'

function deleteFromLocaleStorage() {
   return localStorage.removeItem(EBOOK_AUTH_INFO)
}

export default deleteFromLocaleStorage
