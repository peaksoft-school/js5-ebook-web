import { URL } from '../utils/constants/constants'

let store
export const injectStore = (fromStore) => {
   store = fromStore
}

const appFetch = ({ url, method, body }) => {
   const { auth } = store.getState()
   // console.log(auth)
   const requestOptions = {
      method: method || 'GET',
      headers: {
         'Content-Type': 'application/json; charset=utf-8',
      },
   }
<<<<<<< HEAD

   if (auth.user.token) {
      requestOptions.headers.Authorization = `Bearer ${auth.user.token}`
=======
   if (token) {
      requestOptions.headers.Authorization = `Bearer ${token}`
>>>>>>> d68ac5f012aa84e18b156d621b129769809b222f
   }

   if (method && body) {
      requestOptions.body = JSON.stringify(body)
   }
   const promise = new Promise((resolve, reject) => {
      fetch(URL + url, requestOptions)
         .then((response) => {
            if (!response.ok) {
               throw new Error('Что то пошло не так!')
            }
            return response.json()
         })
         .then((data) => {
            resolve(data)
         })
         .catch((error) => {
            reject(error.message)
         })
   })
   return promise
}
export default appFetch
